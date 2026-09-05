const test = require('node:test');
const assert = require('node:assert/strict');
const {loadContent, auditContent} = require('../scripts/audit-content.cjs');
const catalog = require('../vocabulary-catalog.js');
const sceneWords = require('../scene-vocab.js');
const {normalize, candidates, buildQueue} = require('../autoplay-setup.js');
const {vocab} = loadContent();
const settings = categories => ({source: 'theme', categoryVersion: 1, categories, count: 0});

test('24 scene decks each provide ten complete contextual entries with stable, separate IDs', () => {
  assert.equal(catalog.scenes.length, 24);
  assert.equal(sceneWords.length, 240);
  assert.equal(new Set(sceneWords.map(v => v.id)).size, 240);
  assert.deepEqual(auditContent({vocab: sceneWords, grammar: []}).errors, []);
  for (const entry of catalog.scenes) {
    const words = catalog.select(vocab, [entry.id]);
    assert.equal(words.length, 10, entry.id);
    assert.ok(words.every(v => v.topicId === entry.topicId));
    assert.ok(words.every(v => v.id >= 20001 && v.id <= 20240));
    assert.ok(words.every(v => !/[一-龥A-Za-z0-9]/.test(v.ex_read)), entry.id + ': complete kana reading');
  }
  assert.equal(vocab.length, 10414 + 240);
  assert.equal(new Set(vocab.map(v => v.id)).size, vocab.length);
});

test('topics use curated IDs and scenes instead of trusting polluted legacy category labels', () => {
  assert.equal(catalog.topics.length, 12);
  assert.equal(catalog.specials.length, 5);
  assert.equal(catalog.matches({id: -1, word: '問題', category: '食べ物・料理'}, 'topic:food'), false);
  assert.equal(catalog.matches({id: -1, word: '問題', category: '餐厅点餐'}, 'scene:restaurant'), false);
  const listed = catalog.list(vocab, 'topic');
  assert.ok(listed.every(entry => entry.count >= 20));
  const curatedIds = new Set(catalog.select(vocab, catalog.topics.map(t => t.id)).filter(v => !v.sceneId).map(v => v.id));
  assert.equal(curatedIds.size, 430);
  assert.equal(catalog.select(vocab, catalog.topics.map(t => t.id)).length, 670);
});

test('overlapping scene and topic selections form an ID-deduplicated union', () => {
  const restaurant = catalog.select(vocab, ['scene:restaurant']);
  const food = catalog.select(vocab, ['topic:food']);
  assert.ok(restaurant.every(v => food.includes(v)));
  const combined = candidates(vocab, [], settings(['scene:restaurant', 'topic:food']));
  assert.deepEqual(combined.map(v => v.id), food.map(v => v.id));
  const queue = buildQueue(vocab, [], settings(['scene:restaurant', 'topic:food']), {manual: true});
  assert.equal(queue.length, food.length);
  assert.equal(new Set(queue.map(v => v.id)).size, queue.length);
});

test('new empty selection stays empty; legacy empty and named category filters retain their scope', () => {
  assert.equal(candidates(vocab, [], settings([])).length, 0);
  const legacy = normalize({source: 'theme', categories: []});
  assert.deepEqual(legacy.categories, ['legacy:all']);
  assert.equal(candidates(vocab, [], legacy).length, vocab.length);
  const oldNames = ['食べ物・料理', 'N2听力'];
  assert.deepEqual(candidates(vocab, [], {source: 'theme', categories: oldNames}).map(v => v.id), vocab.filter(v => oldNames.includes(v.category)).map(v => v.id));
});

test('combined scopes intersect selected levels and curated categories before adding special decks', () => {
  const s = {...settings(['scene:restaurant']), source: 'mixed', levels: ['n3'], lvlOn: true, catOn: true, customOn: true, customCategories: ['N2听力']};
  const expected = vocab.filter(v => v.sceneId === 'restaurant' && v.level === 'n3' || v.category === 'N2听力');
  assert.deepEqual(candidates(vocab, [], s).map(v => v.id), expected.map(v => v.id));
});

test('catalog counters, search vocabulary, and every scene playback queue agree', () => {
  for (const entry of catalog.list(vocab, 'scene')) {
    const queue = buildQueue(vocab, [], settings([entry.id]), {manual: true});
    assert.equal(queue.length, entry.count);
    assert.ok(queue.every(word => catalog.matches(word, entry.id)));
    assert.ok(entry.search.includes(entry.words[0].word.toLowerCase()));
    assert.ok(entry.search.includes(entry.words[0].meaning.toLowerCase()));
  }
});

test('new scene IDs resolve in bookmarks and preserved plan orders without losing examples', () => {
  const ids = [20001, 1, 20240];
  const queue = buildQueue(vocab, [{type: 'vocab', id: '20001'}], {todayWordIds: ids});
  assert.deepEqual(queue.map(v => v.id), ids);
  assert.equal(candidates(vocab, [{type: 'vocab', id: '20001'}], {source: 'book'})[0].ex_jp, sceneWords[0].ex_jp);
});
