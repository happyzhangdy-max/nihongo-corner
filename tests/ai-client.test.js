const {test} = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

function client() {
    const requests = [];
    class Request {
        constructor() { this.headers = {}; requests.push(this); }
        open(method, url) { this.method = method; this.url = url; }
        setRequestHeader(name, value) { this.headers[name] = value; }
        send(body) { this.body = JSON.parse(body); }
        abort() { this.onabort?.(); }
        respond(status, body) {
            this.status = status;
            this.responseText = typeof body === "string" ? body : JSON.stringify(body);
            this.onload();
        }
    }
    const scope = {XMLHttpRequest: Request};
    vm.createContext(scope);
    vm.runInContext(fs.readFileSync(path.join(__dirname, "../ai-client.js"), "utf8"), scope);
    return {scope, requests, call: (...args) => scope.callAI("/api", "model", [{role: "user", content: "日文"}], 100, ...args)};
}

test("proxy requests omit empty credentials and preserve request content", async () => {
    const {call, requests} = client();
    const pending = call();
    assert.equal(requests[0].headers.Authorization, undefined);
    assert.equal(requests[0].body.messages[0].content, "日文");
    requests[0].respond(200, {choices: [{message: {content: "  翻译  "}}]});
    assert.equal(await pending, "翻译");
});

test("explicit credentials and scan timeout are honored", async () => {
    const {call, requests} = client();
    const pending = call("test-only-key", {timeout: 90000});
    assert.equal(requests[0].headers.Authorization, "Bearer test-only-key");
    assert.equal(requests[0].timeout, 90000);
    requests[0].respond(200, {choices: [{message: {content: [{type: "text", text: "日本語"}]}}]});
    assert.equal(await pending, "日本語");
});

for (const [label, status, body, error] of [
    ["retired model", 404, {error: {message: "No endpoints found"}}, /404.*No endpoints/],
    ["HTML gateway failure", 502, "<html>Bad Gateway</html>", /HTTP 502/],
    ["invalid JSON", 200, "{", /解析/],
    ["null body", 200, "null", /无效响应/],
    ["empty body", 200, {choices: [{message: {content: ""}}]}, /有效内容/],
    ["absent choices", 200, {}, /有效内容/],
    ["truncated answer", 200, {choices: [{finish_reason: "length", message: {content: "partial"}}]}, /未完成/],
    ["error despite content", 403, {choices: [{message: {content: "partial"}}]}, /403/],
    ["streaming provider error", 200, {error: {message: "provider failed"}}, /provider failed/]
]) {
    test(label + " rejects instead of hanging or showing success", async () => {
        const {call, requests} = client();
        const pending = call();
        requests[0].respond(status, body);
        await assert.rejects(pending, error);
    });
}

for (const [event, message] of [["ontimeout", /超时/], ["onerror", /网络/]]) {
    test(event + " returns a recoverable error", async () => {
        const {call, requests} = client();
        const pending = call();
        requests[0][event]();
        await assert.rejects(pending, message);
    });
}

test("cancellation aborts the pending request", async () => {
    const {call} = client();
    const controller = new AbortController();
    const pending = call("", {signal: controller.signal});
    controller.abort();
    await assert.rejects(pending, {name: "AbortError"});
});

test("an already cancelled operation sends nothing", async () => {
    const {call, requests} = client();
    const controller = new AbortController();
    controller.abort();
    await assert.rejects(call("", {signal: controller.signal}), {name: "AbortError"});
    assert.equal(requests[0].body, undefined);
});
