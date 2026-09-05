const test = require('node:test');
const assert = require('node:assert/strict');
const data = require('../scene-lessons.js');
const {getScene, selectDialogues, makeQueue} = require('../scene-study.js');
const {createPlayer} = require('../scene-audio.js');
const {normalize, candidates} = require('../autoplay-setup.js');
const {loadContent} = require('../scripts/audit-content.cjs');

test('every scene contains six complete task dialogues, with stable IDs and source context', () => {
  assert.equal(data.authorship, 'original');
  assert.equal(data.scenes.length, 24);
  const ids = [], sentences = [];
  for (const scene of data.scenes) {
    assert.equal(scene.dialogues.length, 6, scene.id);
    assert.ok(scene.references.length);
    for (const ref of scene.references) assert.ok(data.sources.some(s => s.id === ref.sourceId && new URL(s.url).protocol === 'https:'));
    for (const [i, d] of scene.dialogues.entries()) {
      assert.equal(d.id, scene.id + '-' + String(i + 1).padStart(2, '0'));
      assert.equal(d.sceneId, scene.id);
      for (const key of ['task', 'situation', 'youRole', 'otherRole']) assert.ok(d[key]?.trim(), d.id + ':' + key);
      assert.ok(d.keywords.length > 0 && d.keywords.length <= 2);
      for (const line of [d, d.reply]) {
        assert.ok(line.jp?.trim() && line.reading?.trim() && line.cn?.trim(), d.id);
        assert.doesNotMatch(line.reading, /[一-龥A-Za-z0-9]/, d.id + ': full kana reading');
        sentences.push(line.jp);
      }
      for (const k of d.keywords) assert.ok(k.word && k.reading && k.meaning, d.id);
      ids.push(d.id);
    }
  }
  assert.equal(new Set(ids).size, 144);
  assert.equal(sentences.length, 288);
  assert.equal(new Set(sentences).size, sentences.length);
});

test('scene and task queues cannot include another scene, vocabulary selections or progress IDs', () => {
  for (const scene of data.scenes) {
    const queue = makeQueue(scene.id);
    assert.equal(queue.length, 12);
    assert.ok(queue.every(item => item.sceneId === scene.id && typeof item.id === 'string'));
    assert.equal(makeQueue(scene.id, null, false).length, 6);
    for (const d of scene.dialogues) {
      assert.deepEqual(makeQueue(scene.id, d.id).map(item => item.jp), [d.jp, d.reply.jp]);
      assert.deepEqual(makeQueue(scene.id, d.id, false).map(item => item.jp), [d.jp]);
    }
    assert.deepEqual(makeQueue(scene.id, 'another-scene-task'), []);
  }
  assert.equal(getScene('legacy:all'), null);
  assert.deepEqual(selectDialogues('missing'), []);
  assert.deepEqual(makeQueue('scene:restaurant'), []);
});

test('a concrete category overrides the legacy all-words sentinel without changing explicit all mode', () => {
  const {vocab} = loadContent();
  const old = {source: 'theme', categories: ['legacy:all', 'scene:restaurant']};
  assert.deepEqual(normalize(old).categories, ['scene:restaurant']);
  const selected = candidates(vocab, [], old);
  assert.equal(selected.length, 10);
  assert.ok(selected.every(w => w.sceneId === 'restaurant'));
  assert.equal(candidates(vocab, [], {...old, source: 'all'}).length, vocab.length);
  assert.equal(candidates(vocab, [], {source: 'theme', categories: ['legacy:all']}).length, vocab.length);
});

function fixture() {
  let sequence = 0;
  const pending = new Map(), spoken = [], errors = [];
  const timers = {setTimeout(fn, ms) { const id = ++sequence; pending.set(id, {fn, ms}); return id; }, clearTimeout(id) { pending.delete(id); }};
  const speech = {cancel() {}, getVoices: () => [{lang: 'ja-JP'}], speak(u) {spoken.push(u);}};
  const player = createPlayer({speech, Utterance: class {constructor(text) {this.text = text;}}, timers, onError: e => errors.push(e)});
  const tick = ms => { for (const [id, item] of [...pending]) if (item.ms === ms && pending.has(id)) {pending.delete(id); item.fn();} };
  return {player, spoken, errors, tick, pending};
}
const items = [{jp: '長い文章も最後まで聞いてから、次の文章へ進みます。'}, {jp: '次の文です。'}];

test('long sentences advance only after speech ends and the learner pause elapses', () => {
  const f = fixture(); f.player.start(items, {gap: 4000});
  f.tick(4000); assert.equal(f.spoken.length, 1); assert.equal(f.player.snapshot().index, 0);
  f.spoken[0].onend(); assert.equal(f.player.snapshot().status, 'gap');
  f.tick(4000); assert.equal(f.spoken.length, 2); assert.equal(f.player.snapshot().index, 1);
  f.spoken[1].onend(); f.tick(4000); assert.equal(f.player.snapshot().status, 'complete');
  assert.equal(f.pending.size, 0);
});

test('pause and manual navigation invalidate stale speech callbacks and preserve pause', () => {
  const f = fixture(); f.player.start(items); const stale = f.spoken[0];
  f.player.pause(); f.player.next(); stale.onend(); f.tick(2000);
  assert.equal(f.player.snapshot().status, 'paused'); assert.equal(f.player.snapshot().index, 1); assert.equal(f.spoken.length, 1);
  f.player.previous(); f.player.resume(); assert.equal(f.spoken.length, 2); assert.equal(f.spoken[1].text, items[0].jp);
  f.player.stop(); f.spoken[1].onend(); f.tick(2000); f.tick(60000);
  assert.deepEqual(f.player.snapshot(), {status: 'idle', index: 0, total: 0, item: null});
});

test('replacing or stopping a queue during the practice gap cannot restart the old scene', () => {
  const f = fixture(); f.player.start(items); f.spoken[0].onend();
  f.player.start([{jp: '別の場面です。'}]); f.tick(2000);
  assert.equal(f.spoken.length, 2); assert.equal(f.player.snapshot().total, 1);
  f.spoken[1].onend(); f.player.stop(); f.tick(2000); assert.equal(f.player.snapshot().status, 'idle');
});

test('speech errors and missing speech support pause visibly without skipping the sentence', () => {
  const f = fixture(); f.player.start(items); f.spoken[0].onerror();
  assert.equal(f.player.snapshot().status, 'paused'); assert.equal(f.player.snapshot().index, 0); assert.equal(f.errors.length, 1);
  f.player.resume(); f.tick(60000); assert.equal(f.player.snapshot().status, 'paused'); assert.equal(f.errors.length, 2);
  const errors = []; const player = createPlayer({onError: e => errors.push(e)}); player.start(items);
  assert.equal(player.snapshot().status, 'paused'); assert.equal(errors.length, 1);
});
