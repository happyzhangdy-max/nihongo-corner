const test = require('node:test');
const assert = require('node:assert/strict');
const { loadContent, auditContent } = require('../scripts/audit-content.cjs');

test('the entire vocabulary and grammar corpus passes structural and import-quality checks', () => {
  const report = auditContent(loadContent());
  assert.ok(report.vocab > 10000);
  assert.ok(report.grammar > 300);
  assert.deepEqual(report.errors, []);
});

test('the audit rejects Chinese notes, partial readings and duplicate IDs', () => {
  const row = { id: 1, word: '資料', reading: 'しりょう', level: 'n2', meaning: '资料', ex_jp: '资料高频词', ex_read: 'しりょう', ex_cn: '资料' };
  const report = auditContent({ vocab: [row, row], grammar: [] });
  assert.ok(report.errors.some(e => e.includes('non-Japanese example')));
  assert.ok(report.errors.some(e => e.includes('only the headword')));
  assert.ok(report.errors.some(e => e.includes('duplicate ID')));
});

test('reviewed grammar examples no longer contain the confirmed broken constructions', () => {
  const { grammar, vocab } = loadContent();
  const examples = [...grammar, ...vocab].map(v => v.ex_jp).join('\n');
  for (const text of ['日本語を上手になる', '企業を倒産を', '覚えたはしから', 'しないべきだ', '食べるが大事です']) {
    assert.ok(!examples.includes(text), `regressed example: ${text}`);
  }
});
