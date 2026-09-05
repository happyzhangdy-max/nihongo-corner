const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function loadContent() {
  const context = vm.createContext({});
  for (const name of ['data.js', 'scene-vocab.js', 'grammar_data.js']) {
    vm.runInContext(fs.readFileSync(path.join(__dirname, '..', name), 'utf8'), context);
  }
  return vm.runInContext('({ vocab: VOCAB_DATA, grammar: GRAMMAR_DATA })', context);
}

function auditContent({ vocab, grammar }) {
  const errors = [];
  const duplicates = [];
  const seenWords = new Map();
  for (const [kind, rows] of [['vocab', vocab], ['grammar', grammar]]) {
    const seenIds = new Set();
    for (const row of rows) {
      const label = `${kind}:${row.id}`;
      if (!Number.isInteger(row.id) || seenIds.has(row.id)) errors.push(`${label}: invalid or duplicate ID`);
      seenIds.add(row.id);
      for (const field of [kind === 'vocab' ? 'word' : 'pattern', 'meaning', 'ex_jp', 'ex_read', 'ex_cn']) {
        if (typeof row[field] !== 'string' || !row[field].trim()) errors.push(`${label}: missing ${field}`);
      }
      if (!/^n[1-5]$/.test(row.level)) errors.push(`${label}: invalid level`);
      // Simplified Chinese characters and editorial notes from the broken imports.
      if (/[这们说题词语并频]/.test(row.ex_jp) || /词感|叠词|前项|后项/.test(row.ex_jp)) errors.push(`${label}: non-Japanese example`);
      if (kind === 'vocab') {
        if (typeof row.reading !== 'string' || !row.reading.trim() || /[一-龥]/.test(row.reading)) errors.push(`${label}: invalid word reading`);
        if (row.ex_read === row.reading && row.ex_jp !== row.word) errors.push(`${label}: example reading contains only the headword`);
        const key = `${row.word}|${row.reading}|${row.level}`;
        if (seenWords.has(key)) duplicates.push([seenWords.get(key), row.id]);
        else seenWords.set(key, row.id);
      }
    }
  }
  return { vocab: vocab.length, grammar: grammar.length, errors, duplicateWordPairs: duplicates.length };
}

module.exports = { loadContent, auditContent };
if (require.main === module) {
  const report = auditContent(loadContent());
  console.log(JSON.stringify(report, null, 2));
  if (report.errors.length) process.exitCode = 1;
}
