const {test} = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const source = fs.readFileSync(path.join(__dirname, "../inline.js"), "utf8");
const scope = {};
vm.createContext(scope);
vm.runInContext(source.slice(source.indexOf("function sm2("), source.indexOf("function lp(")), scope);

test("successful reviews advance through 1, 6 and 15 days using persisted records", () => {
    let record = {};
    for (const [index, interval] of [1, 6, 15].entries()) {
        record = scope.sm2(JSON.parse(JSON.stringify(record)), 4);
        assert.equal(record.interval, interval);
        assert.equal(record.repetitions, index + 1);
    }
});

test("a lapse restarts learning and subsequent reviews advance again", () => {
    let record = scope.sm2({interval: 15, repetitions: 3, ef: 2.5}, 0);
    assert.equal(record.interval, 1);
    assert.equal(record.repetitions, 0);
    record = scope.sm2(record, 4);
    record = scope.sm2(record, 4);
    assert.equal(record.interval, 6);
});

test("legacy abbreviated records remain compatible", () => {
    const record = scope.sm2({i: 6, r: 2, e: 2.5}, 4);
    assert.equal(record.interval, 15);
    assert.equal(record.repetitions, 3);
});

test("touch dragging moves until touchend, then removes listeners", () => {
    const listeners = new Map();
    const document = {
        addEventListener(name, callback) { listeners.set(name, callback); },
        removeEventListener(name, callback) {
            if (listeners.get(name) === callback) listeners.delete(name);
        }
    };
    const drag = {document};
    vm.createContext(drag);
    vm.runInContext(source.slice(source.indexOf("var _dragMove="), source.indexOf("let quizData=")), drag);
    const events = [];
    drag.bindDrag(() => events.push("move"), () => events.push("end"));
    listeners.get("touchmove")();
    listeners.get("touchmove")();
    listeners.get("touchend")();
    assert.deepEqual(events, ["move", "move", "end"]);
    drag.unbindDrag();
    assert.equal(listeners.size, 0);
});
