const {test} = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

function setup() {
    const elements = new Map();
    const storage = new Map();
    const listeners = {};
    function element() {
        return {
            style: {}, classList: {add() {}, remove() {}, contains() { return true; }},
            children: [], _text: "", value: "",
            get textContent() { return this._text; },
            set textContent(value) { this._text = value; this.children = []; },
            appendChild(child) { this.children.push(child); },
            addEventListener(name, callback) { this[name] = callback; },
            removeAttribute() {}
        };
    }
    const document = {
        getElementById(id) {
            if (!elements.has(id)) elements.set(id, element());
            return elements.get(id);
        },
        querySelector() { return element(); },
        querySelectorAll() { return [element(), element(), element()]; },
        createElement: element,
        addEventListener(name, callback) { (listeners[name] ||= []).push(callback); }
    };
    const scope = {
        document, AbortController, setTimeout, clearTimeout,
        _scanConfig: {apiUrl: "/api", model: "test"},
        localStorage: {
            getItem(key) { return storage.get(key) || null; },
            setItem(key, value) { storage.set(key, value); },
            removeItem(key) { storage.delete(key); }
        },
        showT() {}, confirm() { return true; }
    };
    vm.createContext(scope);
    vm.runInContext(fs.readFileSync(path.join(__dirname, "../scan.js"), "utf8"), scope);
    scope.compressImage = async (image) => image;
    return {scope, elements, storage, listeners};
}
const tick = () => new Promise(resolve => setImmediate(resolve));

test("structured responses separate original, translation and analysis", () => {
    const {scope} = setup();
    const result = scope.parseScanResponse("【日文原文】\n日本語\n【中文翻译】\n日语\n【语境讲解】\n说明\n【题目解析】\n无\n【单词讲解】\n日本語（にほんご）\n【语法分析】\n无");
    assert.equal(result.jp, "日本語");
    assert.equal(result.cn, "日语");
    assert.match(result.analysis, /日本語（にほんご）/);
    assert.doesNotMatch(result.analysis, /题目解析|语法分析/);
});

test("free-form answers never pretend to be a translation", () => {
    const {scope} = setup();
    const result = scope.parseScanResponse("图片模糊，请重新拍摄");
    assert.equal(result.cn, "");
    assert.equal(result.jp, "");
    assert.match(result.analysis, /图片模糊/);
});

test("clear cancels work and ignores a late response", async () => {
    const {scope, elements} = setup();
    let resolve, signal;
    scope.callScanAnalyze = (_, s) => { signal = s; return new Promise(r => resolve = r); };
    const pending = scope.loadScanImage("first");
    await tick();
    scope.clearScanImage();
    resolve({jp: "old", cn: "旧", analysis: ""});
    await pending;
    assert.equal(signal.aborted, true);
    assert.equal(elements.get("scanResult").style.display, "none");
    assert.equal(scope._scanHistory.length, 0);
    assert.equal(scope._scanBusy, false);
});

test("new selection cannot be overwritten by the previous response", async () => {
    const {scope, elements} = setup();
    const responses = [];
    scope.callScanAnalyze = () => new Promise(resolve => responses.push(resolve));
    const first = scope.loadScanImage("first");
    await tick();
    const second = scope.loadScanImage("second");
    await tick();
    responses[1]({jp: "new", cn: "新", analysis: ""});
    await second;
    responses[0]({jp: "old", cn: "旧", analysis: ""});
    await first;
    assert.equal(elements.get("scanFullCn").textContent, "新");
    assert.equal(scope._scanHistory.length, 1);
});

test("repeated clicks send only one request", async () => {
    const {scope} = setup();
    let calls = 0, resolve;
    scope.callScanAnalyze = () => { calls++; return new Promise(r => resolve = r); };
    const pending = scope.loadScanImage("image");
    await tick();
    await scope.doScan();
    assert.equal(calls, 1);
    resolve({jp: "日本語", cn: "日语", analysis: ""});
    await pending;
});

test("failure retains the photo and enables a successful retry", async () => {
    const {scope, elements} = setup();
    scope.callScanAnalyze = async () => { throw new Error("HTTP 503"); };
    await scope.loadScanImage("image");
    assert.equal(scope._scanImageData, "image");
    assert.equal(elements.get("scanPreview").style.display, "block");
    assert.equal(elements.get("scanDoBtn").disabled, false);
    assert.match(elements.get("scanError").textContent, /503/);
    scope.callScanAnalyze = async () => ({jp: "日本語", cn: "日语", analysis: "讲解"});
    await scope.doScan();
    assert.equal(elements.get("scanResult").style.display, "block");
    assert.equal(elements.get("scanError").style.display, "none");
});

test("storage failure does not turn a successful scan into failure", async () => {
    const {scope, elements} = setup();
    scope.localStorage.setItem = () => { throw new Error("quota"); };
    scope.callScanAnalyze = async () => ({jp: "日本語", cn: "日语", analysis: "讲解"});
    await scope.loadScanImage("image");
    assert.equal(elements.get("scanResult").style.display, "block");
    assert.equal(elements.get("scanPreview").style.display, "none");
    assert.equal(elements.get("scanError").style.display, "none");
});

test("old history entries remain readable without duplicating history", () => {
    const {scope, storage, elements} = setup();
    storage.set("scanHist", JSON.stringify([{jp: "日本語", cn: "日语", time: "old"}]));
    scope.loadScanHistory();
    elements.get("scanHistoryList").children[0].click();
    assert.equal(elements.get("scanFullCn").textContent, "日语");
    assert.equal(scope._scanHistory.length, 1);
});

test("missing or damaged history never breaks the scan page", () => {
    const {scope, storage} = setup();
    for (const value of ["{", "null", "{}", '[null, {"jp": 123}]']) {
        storage.set("scanHist", value);
        assert.doesNotThrow(() => scope.loadScanHistory());
        assert.equal(scope._scanHistory.length, 0);
    }
    scope.saveScanHistory("日本語", "日语", "讲解");
    storage.delete("scanHist");
    scope.loadScanHistory();
    assert.equal(scope._scanHistory.length, 0);
});

test("clearing history removes memory and storage, so it cannot reappear", () => {
    const {scope, storage, elements} = setup();
    scope.saveScanHistory("日本語", "日语", "讲解");
    scope.clearScanHistory();
    scope.saveScanHistory("次", "下一张", "");
    assert.equal(JSON.parse(storage.get("scanHist")).length, 1);
    assert.equal(elements.get("scanHistoryList").children.length, 1);
});

test("all upload paths reject oversized or non-image files before reading", () => {
    const {scope, elements} = setup();
    scope.readScanFile({size: 21 * 1024 * 1024, type: "image/png", name: "big.png"});
    assert.match(elements.get("scanError").textContent, /20MB/);
    scope.readScanFile({size: 100, type: "text/plain", name: "bad.txt"});
    assert.match(elements.get("scanError").textContent, /图片文件/);
    assert.equal(scope._scanBusy, false);
});

test("clipboard image handling selects one image exactly once", () => {
    const {scope, listeners} = setup();
    let reads = 0, prevented = false;
    scope.readScanFile = () => reads++;
    const event = {
        clipboardData: {items: [{type: "image/png", getAsFile: () => ({size: 100})}]},
        preventDefault() { prevented = true; }
    };
    listeners.paste.forEach(listener => listener(event));
    assert.equal(reads, 1);
    assert.equal(prevented, true);
});

test("file-read failure clears loading state", () => {
    const {scope, elements} = setup();
    scope.FileReader = class { readAsDataURL() { this.onerror(); } };
    scope.readScanFile({size: 100, type: "image/png", name: "test.png"});
    assert.equal(scope._scanBusy, false);
    assert.match(elements.get("scanError").textContent, /无法读取/);
});
