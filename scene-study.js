/* Scene practice is independent of vocabulary filters, bookmarks and review IDs. */
(function (root) {
  'use strict';
  const data = typeof module !== 'undefined' && module.exports ? require('./scene-lessons.js') : root.SceneLessons;
  function getScene(id) { return data.scenes.find(scene => scene.id === id) || null; }
  function selectDialogues(sceneId, taskId) {
    const scene = getScene(sceneId);
    return scene ? scene.dialogues.filter(dialogue => !taskId || dialogue.id === taskId) : [];
  }
  function makeQueue(sceneId, taskId, replies = true) {
    return selectDialogues(sceneId, taskId).flatMap(dialogue => [
      {id: dialogue.id + ':you', dialogueId: dialogue.id, sceneId, role: 'you', jp: dialogue.jp},
      ...(replies ? [{id: dialogue.id + ':other', dialogueId: dialogue.id, sceneId, role: 'other', jp: dialogue.reply.jp}] : [])
    ]);
  }
  const api = {getScene, selectDialogues, makeQueue};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (!root.document) return;
  root.SceneStudy = api;
  const escape = value => String(value || '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  let sceneId = null, taskId = null, lastQueue = [], lastSpokenId = null, prefs = {reading: true, translation: true, replies: true, gap: 2000};
  try {
    const saved = JSON.parse(localStorage.getItem('scene_study_settings') || '{}');
    for (const key of ['reading', 'translation', 'replies']) if (typeof saved[key] === 'boolean') prefs[key] = saved[key];
    if ([1000, 2000, 4000].includes(saved.gap)) prefs.gap = saved.gap;
  } catch (_) { /* Corrupt optional preferences never change sentence membership. */ }
  function savePrefs() { try { localStorage.setItem('scene_study_settings', JSON.stringify(prefs)); } catch (_) {} }
  const page = () => document.getElementById('p-scenes');
  const player = root.SceneAudio.createPlayer({
    speech: root.speechSynthesis, Utterance: root.SpeechSynthesisUtterance,
    onUpdate: updatePlayer, onError: message => {
      const error = page()?.querySelector('#sceneAudioError');
      if (error) { error.textContent = message; error.hidden = false; }
    }
  });
  api.stop = () => player.stop();
  api.open = id => { player.stop(); sceneId = getScene(id) ? id : null; taskId = null; go('scenes'); };
  function heading(title, text) {
    return '<header class="scene-heading"><p class="study-eyebrow">到场景里，练会说的话</p><h1 tabindex="-1">' + escape(title) + '</h1><p>' + escape(text) + '</p></header>';
  }
  function renderDirectory(query = '') {
    const q = query.trim().toLowerCase();
    const matches = data.scenes.filter(scene => [scene.label, scene.group, scene.description, ...scene.dialogues.flatMap(d => [d.task, d.jp, d.reading, d.cn, d.reply.jp, d.reply.reading, d.reply.cn])].join(' ').toLowerCase().includes(q));
    const groups = [...new Set(matches.map(scene => scene.group))];
    page().querySelector('#sceneDirectoryResults').textContent = matches.length + ' 个场景 · 每场景 6 组对话 / 12 句';
    page().querySelector('#sceneDirectoryGroups').innerHTML = groups.map(group => '<section class="scene-directory-group"><h2>' + escape(group) + '</h2><div class="scene-directory-grid">' + matches.filter(scene => scene.group === group).map(scene => '<button type="button" data-scene-open="' + escape(scene.id) + '"><strong>' + escape(scene.label) + '</strong><small>6 组对话 · 12 句</small><p>' + escape(scene.dialogues.slice(0, 3).map(d => d.task).join(' · ')) + '</p><span aria-hidden="true">进入场景 →</span></button>').join('') + '</div></section>').join('');
    page().querySelector('#sceneDirectoryEmpty').hidden = !!matches.length;
  }
  function renderIndex() {
    page().innerHTML = '<div class="scene-study">' + heading('场景句子', '先选一件要做的事，练完整表达和常见回应。') +
      '<div class="scene-directory-search"><label for="sceneSearch">查找场景、任务或句子</label><input id="sceneSearch" type="search" placeholder="例如：点餐、改预约、ゆっくり" autocomplete="off"><p id="sceneDirectoryResults" role="status" aria-live="polite"></p></div><div id="sceneDirectoryGroups"></div><p id="sceneDirectoryEmpty" role="status" hidden>没有找到匹配的场景，请换个关键词。</p><button type="button" class="scene-text-button" data-scene-action="words">去学主题词汇 →</button></div>';
    renderDirectory();
  }
  function sentence(jp, reading, cn) {
    return '<p class="scene-jp" lang="ja">' + escape(jp) + '</p><p class="scene-reading" lang="ja"' + (prefs.reading ? '' : ' hidden') + '>' + escape(reading) + '</p><p class="scene-translation"' + (prefs.translation ? '' : ' hidden') + '>' + escape(cn) + '</p>';
  }
  function renderLesson() {
    const scene = getScene(sceneId);
    const dialogues = selectDialogues(sceneId, taskId);
    page().innerHTML = '<div class="scene-study"><button type="button" class="scene-text-button" data-scene-action="directory">← 全部场景</button>' + heading(scene.label, scene.description) +
      '<p class="scene-scope">本场景 6 组对话 · 12 句；只学习这个场景。</p><div class="scene-task-tabs" role="group" aria-label="选择交流任务"><button type="button" data-scene-task="" aria-pressed="' + !taskId + '">全部任务</button>' + scene.dialogues.map(d => '<button type="button" data-scene-task="' + escape(d.id) + '" aria-pressed="' + (taskId === d.id) + '">' + escape(d.task) + '</button>').join('') + '</div>' +
      '<label class="scene-task-select">交流任务<select id="sceneTaskSelect"><option value="">全部任务（6 组对话）</option>' + scene.dialogues.map(d => '<option value="' + escape(d.id) + '"' + (taskId === d.id ? ' selected' : '') + '>' + escape(d.task) + '</option>').join('') + '</select></label>' +
      '<details class="scene-options"><summary>学习设置</summary><div><label><input type="checkbox" data-scene-setting="reading"' + (prefs.reading ? ' checked' : '') + '> 显示假名</label><label><input type="checkbox" data-scene-setting="translation"' + (prefs.translation ? ' checked' : '') + '> 显示中文</label><label><input type="checkbox" data-scene-setting="replies"' + (prefs.replies ? ' checked' : '') + '> 连播时包含对方回应</label><label>跟读停顿 <select id="sceneGap">' + [[1000, '1 秒'], [2000, '2 秒'], [4000, '4 秒']].map(([value, label]) => '<option value="' + value + '"' + (value === prefs.gap ? ' selected' : '') + '>' + label + '</option>').join('') + '</select></label></div></details>' +
      '<div class="scene-dialogues">' + dialogues.map((d, index) => '<article class="scene-dialogue" id="dialogue-' + escape(d.id) + '"><div class="scene-dialogue-heading"><span>' + String(index + 1).padStart(2, '0') + '</span><h2>' + escape(d.task) + '</h2></div><p class="scene-situation">' + escape(d.situation) + '</p><section class="scene-turn" data-scene-turn="you"><p class="scene-role">你说 · ' + escape(d.youRole) + '</p>' + sentence(d.jp, d.reading, d.cn) + '<button type="button" class="scene-listen" data-scene-speak="' + escape(d.id) + '">听这句</button></section><details class="scene-reply"><summary>对方可能这样回应 · ' + escape(d.otherRole) + '</summary><section class="scene-turn" data-scene-turn="other">' + sentence(d.reply.jp, d.reply.reading, d.reply.cn) + '</section></details><div class="scene-card-actions"><button type="button" data-scene-dialogue="' + escape(d.id) + '">听这组对话</button><details><summary>关键词与用法</summary><dl>' + d.keywords.map(k => '<div><dt lang="ja">' + escape(k.word) + '<small>' + escape(k.reading) + '</small></dt><dd>' + escape(k.meaning) + '</dd></div>').join('') + '</dl>' + (d.note ? '<p>' + escape(d.note) + '</p>' : '') + '</details></div></article>').join('') + '</div>' +
      '<details class="scene-references"><summary>参考教材与来源</summary><p>对话为本站原创，参考资料用于核对场景和交流任务，以下链接可继续学习。</p><ul>' + scene.references.map(ref => { const source = data.sources.find(s => s.id === ref.sourceId); return '<li><a href="' + escape(source.url) + '" target="_blank" rel="noopener noreferrer">' + escape(source.title) + '</a><span>' + escape(ref.unit) + '</span></li>'; }).join('') + '</ul><p>角色回应、时间与金额均为练习情境中的示例。</p></details>' +
      '<div class="scene-player" aria-label="句子播放控制"><div class="scene-player-meta"><span id="scenePlaybackStatus" role="status" aria-live="polite">' + dialogues.length + ' 组对话，准备开始</span><small>浏览器日语语音</small></div><div class="scene-player-buttons"><button type="button" data-scene-action="previous" id="scenePrevious" disabled>上一句</button><button type="button" data-scene-action="toggle" id="sceneToggle" class="scene-primary">开始连播</button><button type="button" data-scene-action="next" id="sceneNext" disabled>下一句</button><button type="button" data-scene-action="stop" id="sceneStop" disabled>停止</button></div><p id="sceneAudioError" role="alert" hidden></p></div></div>';
  }
  function updatePlayer(state) {
    const p = page();
    if (!p?.classList.contains('active') || !p.querySelector('#sceneToggle')) return;
    const active = ['playing', 'gap'].includes(state.status);
    if (state.status === 'idle') lastSpokenId = null;
    p.querySelector('#sceneToggle').textContent = active ? '暂停' : state.status === 'paused' ? '继续这句' : state.status === 'complete' ? '再听一遍' : '开始连播';
    p.querySelector('#scenePrevious').disabled = !state.total || state.index <= 0;
    p.querySelector('#sceneNext').disabled = !state.total || state.index >= state.total - 1;
    p.querySelector('#sceneStop').disabled = !state.total;
    p.querySelector('#scenePlaybackStatus').textContent = state.status === 'complete' ? '本轮已听完 · ' + state.total + ' 句' : state.total ? (Math.min(state.index + 1, state.total)) + ' / ' + state.total + ' 句 · ' + ({playing: '播放中', gap: '跟读时间', paused: '已暂停'}[state.status] || '已停止') : selectDialogues(sceneId, taskId).length + ' 组对话，准备开始';
    p.querySelectorAll('.scene-turn').forEach(turn => turn.classList.remove('is-speaking'));
    if (state.item && (active || state.status === 'paused')) {
      const card = document.getElementById('dialogue-' + state.item.dialogueId);
      if (card) {
        if (state.item.role === 'other') card.querySelector('.scene-reply').open = true;
        const turn = card.querySelector('[data-scene-turn="' + state.item.role + '"]');
        turn.classList.add('is-speaking');
        if (state.status === 'playing' && lastSpokenId !== state.item.id) {
          const rect = turn.getBoundingClientRect(), bounds = p.getBoundingClientRect();
          if (rect.top < bounds.top + 16 || rect.bottom > p.querySelector('.scene-player').getBoundingClientRect().top - 16) p.scrollTo({top: p.scrollTop + rect.top - bounds.top - 24, behavior: root.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
          lastSpokenId = state.item.id;
        }
      }
    }
  }
  function start(items) {
    if (typeof clearSpeechQueue === 'function') clearSpeechQueue();
    const error = page().querySelector('#sceneAudioError'); if (error) error.hidden = true;
    lastQueue = items.slice();
    player.start(items, {gap: prefs.gap});
  }
  api.render = function () {
    player.stop(); lastQueue = [];
    if (typeof clearSpeechQueue === 'function') clearSpeechQueue();
    if (!page()?.classList.contains('active')) return;
    if (getScene(sceneId)) renderLesson(); else renderIndex();
    page().onclick = event => {
      const button = event.target.closest('button'); if (!button) return;
      if (button.dataset.sceneOpen) { sceneId = button.dataset.sceneOpen; taskId = null; api.render(); page().scrollTop = 0; page().querySelector('h1')?.focus({preventScroll: true}); return; }
      if ('sceneTask' in button.dataset) { player.stop(); taskId = button.dataset.sceneTask || null; api.render(); page().querySelector('[data-scene-task="' + (taskId || '') + '"]')?.focus({preventScroll: true}); return; }
      if (button.dataset.sceneSpeak) return start(makeQueue(sceneId, button.dataset.sceneSpeak, false));
      if (button.dataset.sceneDialogue) return start(makeQueue(sceneId, button.dataset.sceneDialogue, true));
      const action = button.dataset.sceneAction;
      if (action === 'directory') { const previousScene = sceneId; player.stop(); sceneId = null; taskId = null; api.render(); page().querySelector('[data-scene-open="' + previousScene + '"]')?.focus(); }
      if (action === 'words') go('autoplay');
      if (action === 'stop') player.stop();
      if (action === 'previous') player.previous();
      if (action === 'next') player.next();
      if (action === 'toggle') {
        const state = player.snapshot();
        if (['playing', 'gap'].includes(state.status)) player.pause();
        else if (state.status === 'paused') player.resume();
        else if (state.status === 'complete' && lastQueue.length) start(lastQueue);
        else start(makeQueue(sceneId, taskId, prefs.replies));
      }
    };
    page().oninput = event => { if (event.target.id === 'sceneSearch') renderDirectory(event.target.value); };
    page().onchange = event => {
      if (event.target.id === 'sceneTaskSelect') { taskId = event.target.value || null; api.render(); page().querySelector('#sceneTaskSelect').focus({preventScroll: true}); return; }
      const key = event.target.dataset.sceneSetting;
      if (key) {
        prefs[key] = event.target.checked; savePrefs();
        if (key === 'reading' || key === 'translation') page().querySelectorAll('.scene-' + key).forEach(el => el.hidden = !prefs[key]);
        if (key === 'replies') player.stop();
      }
      if (event.target.id === 'sceneGap') { prefs.gap = Number(event.target.value); savePrefs(); player.stop(); }
    };
  };
  document.addEventListener('DOMContentLoaded', () => { const requested = new URLSearchParams(location.search).get('scene'); if (getScene(requested)) api.open(requested); });
})(typeof window !== 'undefined' ? window : globalThis);
