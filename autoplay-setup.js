/* Autoplay setup owns settings, source selection and queue creation. */
(function (root) {
  'use strict';
  const LEVELS = ['n5', 'n4', 'n3', 'n2', 'n1'];
  const SPECIAL = ['N2听力', 'N2阅读', '拟声拟态', '外来语', '易混汉字词'];
  const SOURCES = [['level', '按等级', '选择学习范围'], ['theme', '按主题', '场景与专项'], ['book', '生词本', '复习已收藏的词'], ['all', '全部词库', '自由练习']];
  const list = (value, fallback) => Array.isArray(value) ? value.filter(v => typeof v === 'string') : fallback;

  function normalize(value) {
    const raw = value && typeof value === 'object' && !Array.isArray(value) ? value : {};
    const settings = { ...raw };
    settings.levels = list(raw.levels, ['n5', 'n4', 'n3']).filter(v => LEVELS.includes(v));
    settings.categories = list(raw.categories, []);
    settings.customCategories = list(raw.customCategories, []);
    settings.speed = [0, 0.5, 1, 2, 3].includes(raw.speed) ? raw.speed : 1;
    settings.count = [0, 10, 20, 50, 100].includes(raw.count) ? raw.count : 20;
    settings.format = raw.format === 'word_sent' ? 'word_sent' : 'word';
    if (!['level', 'theme', 'book', 'all', 'mixed'].includes(raw.source)) {
      const lvl = raw.lvlOn !== false;
      settings.source = raw.bookOn ? 'book' : raw.customOn || (lvl && raw.catOn) ? 'mixed' : raw.catOn ? 'theme' : lvl ? 'level' : 'all';
    }
    return settings;
  }

  function bookWords(vocab, book) {
    const byId = new Map(vocab.map(v => [String(v.id), v]));
    return (Array.isArray(book) ? book : []).flatMap(item => {
      if (!item || typeof item !== 'object') return [];
      if (item.type === 'vocab') return byId.get(String(item.id)) || [];
      if (item.type !== 'ai' || !item.word) return [];
      return { ...item, id: item.id || 'ai_' + item.word, level: (item.level || '').toLowerCase(),
        reading: item.reading || '', meaning: item.meaning || '',
        ex_jp: item.ex_jp || item.example_jp || '', ex_cn: item.ex_cn || item.example_cn || '' };
    }).filter((v, i, all) => all.findIndex(x => x.id === v.id) === i);
  }

  function candidates(vocab, book, value) {
    const s = normalize(value);
    if (s.source === 'book') return bookWords(vocab, book);
    return vocab.filter(v => {
      const lvl = s.levels.includes(v.level);
      const cat = !s.categories.length || s.categories.includes(v.category);
      if (s.source === 'level') return lvl;
      if (s.source === 'theme') return cat;
      if (s.source === 'all') return true;
      const base = s.lvlOn !== false && s.catOn ? lvl && cat : s.lvlOn !== false ? lvl : !!s.catOn && cat;
      const custom = s.customOn && SPECIAL.includes(v.category) && (!s.customCategories.length || s.customCategories.includes(v.category));
      return base || custom;
    });
  }

  function buildQueue(vocab, book, value, { manual = false, random = Math.random } = {}) {
    const s = normalize(value);
    if (!manual && Array.isArray(s.todayWordIds) && s.todayWordIds.length) {
      const byId = new Map([...vocab, ...bookWords(vocab, book)].map(v => [String(v.id), v]));
      return s.todayWordIds.map(id => byId.get(String(id))).filter(Boolean);
    }
    const queue = candidates(vocab, book, s).slice();
    for (let i = queue.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [queue[i], queue[j]] = [queue[j], queue[i]];
    }
    return s.count > 0 ? queue.slice(0, s.count) : queue;
  }

  const api = { normalize, candidates, buildQueue, bookWords };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (!root.document) return;
  root.AutoplaySetup = api;
  const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let memory = null;
  function read() {
    if (memory) return normalize(memory);
    try { return normalize(JSON.parse(localStorage.getItem('ap_settings') || '{}')); }
    catch (_) { return normalize(memory); }
  }
  function save(s) {
    try { localStorage.setItem('ap_settings', JSON.stringify(s)); memory = null; }
    catch (_) { memory = s; showT('当前浏览器无法保存设置，本次选择仍可使用'); }
  }
  api.read = read;
  api.save = save;
  function books() { try { return getBook(); } catch (_) { return []; } }
  function choices(key, items, selected) {
    return '<div class="study-choices">' + items.map(([value, label]) => '<button type="button" data-key="' + key + '" data-value="' + escape(value) + '" aria-pressed="' + (Array.isArray(selected) ? selected.includes(value) : selected === value) + '">' + escape(label) + '</button>').join('') + '</div>';
  }
  function levels(s) { return choices('levels', LEVELS.map(v => [v, v.toUpperCase()]), s.levels); }
  function categories(s) {
    const counts = new Map();
    VOCAB.forEach(v => { if (v.category) counts.set(v.category, (counts.get(v.category) || 0) + 1); });
    const names = [...counts.keys()].sort((a, b) => SPECIAL.includes(b) - SPECIAL.includes(a) || a.localeCompare(b, 'zh'));
    return '<label class="study-search-label" for="studyCategorySearch">查找主题</label><input id="studyCategorySearch" class="study-search" type="search" placeholder="例如：旅行、N2听力、外来语" autocomplete="off">' +
      '<div class="study-category-summary"><span id="studySelectedCategories">' + (s.categories.length ? '已选 ' + s.categories.length + ' 个主题' : '全部主题') + '</span><button type="button" data-action="clear-categories">全部主题</button></div>' +
      '<div class="study-category-list" aria-label="主题多选">' + names.map(name => '<button type="button" data-key="categories" data-value="' + escape(name) + '" aria-pressed="' + s.categories.includes(name) + '"><span>' + escape(name) + '</span><small>' + counts.get(name) + ' 词</small></button>').join('') + '</div><p class="study-note" id="studyNoCategories" hidden>没有匹配的主题，请换个关键词。</p>';
  }
  function render() {
    const page = document.getElementById('p-autoplay');
    if (!page || !page.classList.contains('active')) return;
    const s = read();
    const mixed = s.source === 'mixed';
    page.innerHTML = '<div class="study-setup"><header class="study-heading"><p class="study-eyebrow">每天一点，慢慢记住</p><h1>自动背单词</h1><p>选好今天的内容，按自己的节奏听与记。</p></header>' +
      '<div class="study-layout"><div class="study-main"><section class="study-panel" aria-labelledby="studyContentTitle"><div class="study-section-title"><span>01</span><h2 id="studyContentTitle">今天学什么</h2></div>' +
      '<div class="study-sources">' + SOURCES.map(([key, title, detail]) => '<button type="button" data-key="source" data-value="' + key + '" aria-pressed="' + (s.source === key) + '"><strong>' + title + '</strong><small>' + detail + '</small></button>').join('') + '</div><div class="study-source-options">' +
      (s.source === 'level' ? '<p class="study-label">选择等级 <span>可多选</span></p>' + levels(s) + '<p class="study-note">等级为本站学习分类，供选择难度时参考。</p>' :
        s.source === 'theme' ? categories(s) :
        s.source === 'book' ? '<div class="study-source-message"><strong>重温你收藏的词</strong><p>包含词库收藏和 AI 搜索收藏。语法收藏不计入单词播放。</p><button type="button" data-action="book">查看生词本 →</button></div>' :
        s.source === 'all' ? '<div class="study-source-message"><strong>从整个词库中随机抽取</strong><p>适合不限等级的综合练习。</p></div>' : '') + '</div>' +
      '<details class="study-advanced"' + (mixed ? ' open' : '') + '><summary>组合筛选</summary><p class="study-note">等级与场景取交集，再加入专项词。适用于已有的组合设置。</p><button type="button" data-key="source" data-value="mixed" aria-pressed="' + mixed + '">使用组合筛选</button>' +
      (mixed ? '<div class="study-mixed"><label><input type="checkbox" data-flag="lvlOn"' + (s.lvlOn !== false ? ' checked' : '') + '> 按等级筛选</label>' + (s.lvlOn !== false ? levels(s) : '') + '<label><input type="checkbox" data-flag="catOn"' + (s.catOn ? ' checked' : '') + '> 按场景筛选</label>' + (s.catOn ? categories(s) : '') + '<label><input type="checkbox" data-flag="customOn"' + (s.customOn ? ' checked' : '') + '> 加入专项词</label>' + (s.customOn ? choices('customCategories', SPECIAL.map(v => [v, v]), s.customCategories.length ? s.customCategories : SPECIAL) : '') + '</div>' : '') + '</details></section>' +
      '<section class="study-panel" aria-labelledby="studySessionTitle"><div class="study-section-title"><span>02</span><h2 id="studySessionTitle">这一轮怎么学</h2></div><fieldset><legend>单词数量</legend>' + choices('count', [[10, '10 词'], [20, '20 词'], [50, '50 词'], [100, '100 词'], [0, '全部']], s.count) + '</fieldset><fieldset><legend>播放内容</legend>' + choices('format', [['word', '只听单词'], ['word_sent', '单词 + 例句 / 搭配']], s.format) + '</fieldset><details class="study-advanced"><summary>播放间隔 <span id="studySpeedSummary">' + s.speed + ' 秒</span></summary><p class="study-note">在基础展示时间上，额外停留的时间。</p>' + choices('speed', [[0, '不停顿'], [0.5, '0.5 秒'], [1, '1 秒'], [2, '2 秒'], [3, '3 秒']], s.speed) + '</details></section></div>' +
      '<aside class="study-ready" aria-labelledby="studyReadyTitle"><span class="study-ready-icon" aria-hidden="true">あ</span><h2 id="studyReadyTitle">准备好就开始</h2><p id="studyReadyDescription"></p><div class="study-total"><strong id="studyTotal">0</strong><span>词 / 本轮</span></div><p class="study-note" id="studyAvailable"></p><div class="study-start-bar"><div class="study-mobile-summary" aria-hidden="true"><strong id="studyMobileCount"></strong><span>本轮学习</span></div><button type="button" class="study-start" id="studyStart" data-action="start">开始学习 <span aria-hidden="true">→</span></button></div><p class="study-note study-ready-footnote">随时暂停、切换单词或停止。</p><p class="study-empty" id="studyEmpty" role="status" hidden></p></aside></div><p class="study-status sr-only" id="studyStatus" role="status" aria-live="polite"></p></div>';
    page.onclick = onClick;
    page.onchange = event => {
      if (!event.target.dataset.flag) return;
      const settings = read();
      settings[event.target.dataset.flag] = event.target.checked;
      save(settings); render();
    };
    page.oninput = event => {
      if (event.target.id !== 'studyCategorySearch') return;
      const q = event.target.value.trim().toLowerCase();
      let visible = 0;
      page.querySelectorAll('[data-key="categories"]').forEach(button => { button.hidden = !button.dataset.value.toLowerCase().includes(q); if (!button.hidden) visible++; });
      page.querySelector('#studyNoCategories').hidden = visible > 0;
    };
    updateSummary(s);
  }
  function updateSummary(s) {
    const page = document.getElementById('p-autoplay');
    const available = candidates(VOCAB, books(), s).length;
    const count = s.count ? Math.min(s.count, available) : available;
    page.querySelector('#studyTotal').textContent = count;
    page.querySelector('#studyMobileCount').textContent = count + ' 词';
    page.querySelector('#studyAvailable').textContent = '当前范围共 ' + available.toLocaleString('zh-CN') + ' 词' + (s.count > available && available ? '，本轮全部学习' : '，随机抽取');
    const name = SOURCES.find(([key]) => key === s.source)?.[1] || '组合筛选';
    page.querySelector('#studyReadyDescription').textContent = name + ' · ' + (s.format === 'word_sent' ? '单词与例句 / 搭配' : '只听单词');
    page.querySelector('#studyStart').disabled = !count;
    const empty = page.querySelector('#studyEmpty');
    empty.hidden = !!count;
    empty.textContent = s.source === 'book' ? '还没有可播放的收藏。先去词库或搜索中收藏几个词吧。' : '当前组合没有词汇，请选择等级或调整主题。';
    page.querySelector('#studyStatus').textContent = '已选择 ' + count + ' 词，共有 ' + available + ' 词可选。';
  }
  function onClick(event) {
    const button = event.target.closest('button');
    if (!button) return;
    const action = button.dataset.action;
    if (action === 'start') return root.startVocabAutoPlay({ manual: true });
    if (action === 'book') return go('book');
    const s = read();
    if (action === 'clear-categories') {
      s.categories = []; save(s);
      document.querySelectorAll('#p-autoplay [data-key="categories"]').forEach(b => b.setAttribute('aria-pressed', 'false'));
      document.getElementById('studySelectedCategories').textContent = '全部主题'; updateSummary(s); return;
    }
    const key = button.dataset.key;
    if (!key) return;
    let value = button.dataset.value;
    if (key === 'count' || key === 'speed') value = Number(value);
    if (['levels', 'categories', 'customCategories'].includes(key)) {
      let selected = s[key];
      if (key === 'customCategories' && !selected.length) selected = SPECIAL.slice();
      s[key] = selected.includes(value) ? selected.filter(v => v !== value) : [...selected, value];
      // Legacy empty custom list means all. Disabling the last item disables this source.
      if (key === 'customCategories' && !s[key].length) s.customOn = false;
    } else s[key] = value;
    save(s);
    if (key === 'source' || key === 'customCategories') {
      render();
      document.querySelector('#p-autoplay [data-key="source"][data-value="' + s.source + '"]')?.focus({ preventScroll: true });
      return;
    }
    document.querySelectorAll('#p-autoplay [data-key="' + key + '"]').forEach(b => {
      const v = key === 'count' || key === 'speed' ? Number(b.dataset.value) : b.dataset.value;
      b.setAttribute('aria-pressed', Array.isArray(s[key]) ? s[key].includes(v) : s[key] === v);
    });
    if (key === 'categories') document.getElementById('studySelectedCategories').textContent = s.categories.length ? '已选 ' + s.categories.length + ' 个主题' : '全部主题';
    if (key === 'speed') document.getElementById('studySpeedSummary').textContent = s.speed + ' 秒';
    updateSummary(s);
  }

  root.renderAutoPlayOptions = render;
  root.startVocabAutoPlay = function (options) {
    const manual = options && options.manual === true;
    const s = read();
    const queue = buildQueue(VOCAB, books(), s, { manual });
    if (!queue.length) return showT('没有可播放的词汇，请调整选择');
    if (manual) {
      Object.keys(s).filter(key => key.startsWith('plan')).forEach(key => delete s[key]);
    }
    s.todayWordIds = queue.map(v => v.id);
    save(s);
    _vApQueue = queue; _vApIdx = 0; _vApPaused = false; _vApActive = true; _vApPlanAdv = false;
    const screen = document.getElementById('gApScreen');
    const controls = screen.querySelectorAll('.ap-controls .btn');
    controls[0].onclick = vApTogglePause; controls[0].textContent = '⏸ 暂停';
    controls[controls.length - 1].onclick = vApStop;
    screen.querySelector('.ap-nav-left').onclick = vApPrev;
    screen.querySelector('.ap-nav-right').onclick = vApNext;
    document.getElementById('gApBmk').onclick = vApToggleBook;
    screen.querySelectorAll('.ap-marks .vm-btn').forEach(button => { button.onclick = () => vApToggleMark(button.dataset.color); });
    screen.classList.add('show');
    _vApSpeed = s.speed;
    vApShowCard();
    controls[0].focus();
  };
})(typeof window !== 'undefined' ? window : globalThis);
