const test = require('node:test');
const assert = require('node:assert/strict');
const { normalize, candidates, buildQueue, bookWords } = require('../autoplay-setup.js');

const vocab = [
  { id: 1, word: '駅', level: 'n5', category: '旅行' },
  { id: 2, word: '予約', level: 'n3', category: '旅行' },
  { id: 3, word: '資料', level: 'n2', category: 'N2听力' },
  { id: 4, word: '机', level: 'n5', category: '生活' }
];
const ids = values => values.map(v => v.id);

test('settings retain zero interval and all-words count, and reject malformed values', () => {
  assert.equal(normalize({ speed: 0, count: 0 }).speed, 0);
  assert.equal(normalize({ speed: 0, count: 0 }).count, 0);
  assert.deepEqual(normalize({ levels: 'n5' }).levels, ['n5', 'n4', 'n3']);
  assert.equal(normalize(null).count, 20);
  assert.equal(normalize({ count: -1 }).count, 20);
});

test('legacy source combinations migrate without widening the selection', () => {
  assert.equal(normalize({ bookOn: true }).source, 'book');
  assert.equal(normalize({ lvlOn: false, catOn: true }).source, 'theme');
  assert.equal(normalize({ lvlOn: false, catOn: false }).source, 'all');
  assert.equal(normalize({ customOn: true }).source, 'mixed');
  assert.equal(normalize({ lvlOn: true, catOn: true }).source, 'mixed');
});

test('level and theme sources have explicit, independent scopes', () => {
  assert.deepEqual(ids(candidates(vocab, [], { source: 'level', levels: ['n5'] })), [1, 4]);
  assert.deepEqual(ids(candidates(vocab, [], { source: 'level', levels: [] })), []);
  assert.deepEqual(ids(candidates(vocab, [], { source: 'theme', categories: ['旅行'] })), [1, 2]);
  assert.equal(candidates(vocab, [], { source: 'all', levels: [] }).length, 4);
});

test('combined filters intersect levels and scenes, then add the selected special deck', () => {
  const settings = { source: 'mixed', lvlOn: true, catOn: true, levels: ['n5'], categories: ['旅行'], customOn: true, customCategories: ['N2听力'] };
  assert.deepEqual(ids(candidates(vocab, [], settings)), [1, 3]);
  assert.deepEqual(ids(candidates(vocab, [], { ...settings, lvlOn: false, catOn: false })), [3]);
  assert.deepEqual(ids(candidates(vocab, [], { ...settings, customOn: false })), [1]);
});

test('book source resolves string IDs, ignores grammar and keeps AI example details', () => {
  const book = [{ type: 'vocab', id: '1' }, { type: 'vocab', id: 1 }, { type: 'grammar', id: 3 }, { type: 'vocab', id: 999 },
    { type: 'ai', id: 'ai_test', word: '空', ex_jp: '空が青い。', ex_cn: '天空很蓝。' }];
  const words = bookWords(vocab, book);
  assert.deepEqual(ids(words), [1, 'ai_test']);
  assert.equal(words[1].ex_jp, '空が青い。');
  assert.equal(candidates(vocab, [], { source: 'book' }).length, 0);
});

test('manual start ignores a cached plan and respects the current source', () => {
  const settings = { source: 'level', levels: ['n5'], count: 10, todayWordIds: [3], planStudyIdx: 0 };
  const queue = buildQueue(vocab, [], settings, { manual: true, random: () => 0 });
  assert.deepEqual(ids(queue).sort(), [1, 4]);
  assert.deepEqual(settings.todayWordIds, [3]);
  assert.deepEqual(ids(vocab), [1, 2, 3, 4]);
});

test('a plan session preserves its exact order and resolves AI bookmarks', () => {
  const book = [{ type: 'ai', id: 'custom', word: '空' }];
  assert.deepEqual(ids(buildQueue(vocab, book, { todayWordIds: [3, 'custom', 1, 999] })), [3, 'custom', 1]);
});

test('queue limit and availability agree, with no duplicate sampling', () => {
  const larger = Array.from({ length: 30 }, (_, i) => ({ id: i + 1, level: 'n5' }));
  const queue = buildQueue(larger, [], { source: 'all', count: 10 }, { manual: true });
  assert.equal(queue.length, 10);
  assert.equal(new Set(ids(queue)).size, 10);
  assert.equal(buildQueue(larger, [], { source: 'all', count: 0 }, { manual: true }).length, 30);
});
