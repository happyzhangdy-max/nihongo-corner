const {test} = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const source = fs.readFileSync(path.join(__dirname, "../inline.js"), "utf8");

function setup() {
    const elements = new Map();
    const storage = new Map();
    const requests = [];
    const document = {
        getElementById(id) {
            if (!elements.has(id)) elements.set(id, {innerHTML: "", value: "",
                classList: {add() {}, remove() {}}, appendChild() {}, remove() {}});
            return elements.get(id);
        },
        createElement() { return {innerHTML: ""}; }
    };
    const scope = {
        document, AbortController, console: {log() {}},
        localStorage: {getItem: key => storage.get(key), setItem: (key, value) => storage.set(key, value)},
        _searchConfig: {apiUrl: "/api", model: "test", apiKey: ""},
        searchLocal: () => [], renderSearchResults() {}, showSearchEmpty() {},
        getBook: () => [], VOCAB: [], escHtml: value => value || "",
        callAI(url, model, messages, tokens, key, options) {
            return new Promise(resolve => requests.push({resolve, signal: options.signal}));
        }
    };
    vm.createContext(scope);
    vm.runInContext(source.slice(source.indexOf("var _searchTimer="), source.indexOf("function showSearchLoading(")), scope);
    function search(text) {
        document.getElementById("aiSearchInput").value = text;
        scope.doSearch();
    }
    return {scope, elements, storage, requests, search};
}
const tick = () => new Promise(resolve => setImmediate(resolve));
const response = text => "中文翻译：" + text + "\n外来语原词：无\n语法点：无";

test("a newer search aborts the old request and keeps its own result", async () => {
    const {search, requests, elements} = setup();
    search("これは古い検索です");
    search("これは新しい検索です");
    assert.equal(requests[0].signal.aborted, true);
    requests[1].resolve(response("新结果"));
    await tick();
    requests[0].resolve(response("旧结果"));
    await tick();
    assert.match(elements.get("searchResults").innerHTML, /新结果/);
    assert.doesNotMatch(elements.get("searchResults").innerHTML, /旧结果/);
});

test("clearing search prevents a late result from reappearing", async () => {
    const {search, scope, requests, elements} = setup();
    search("これは検索です");
    scope.clearSearch();
    requests[0].resolve(response("过期结果"));
    await tick();
    assert.equal(elements.get("searchResults").innerHTML, "");
});

test("damaged cache falls back to the API", async () => {
    const {search, storage, requests, elements} = setup();
    storage.set("_search_cache", "{");
    assert.doesNotThrow(() => search("これは検索です"));
    assert.equal(requests.length, 1);
    requests[0].resolve(response("有效结果"));
    await tick();
    assert.match(elements.get("searchResults").innerHTML, /有效结果/);
});
