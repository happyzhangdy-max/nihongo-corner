/* The catalog browser owns navigation, search, selection chips and previews. */
(function (root) {
  'use strict';
  const kinds = [['scene', '生活场景'], ['topic', '主题词库'], ['special', '语言专项']];
  const descriptions = {
    scene: '从一件要做的事开始。每个场景都有专门编写的词汇与例句。',
    topic: '按语义整理的词汇。包含已核对的原词条和新增场景词句。',
    special: '按语言特点与练习用途整理，适合有针对性地复习。'
  };
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  function mount(container, {vocab, selected, kind = 'scene', onChange, onKindChange}) {
    const catalog = root.VocabularyCatalog;
    let selection = selected.slice();
    let current = kinds.some(item => item[0] === kind) ? kind : 'scene';
    let query = '';
    const lists = Object.fromEntries(kinds.map(([key]) => [key, catalog.list(vocab, key)]));
    container.innerHTML = '<div class="catalog-tabs" role="group" aria-label="分类方式">' + kinds.map(([key, name]) => '<button type="button" data-catalog-kind="' + key + '" aria-pressed="' + (key === current) + '">' + name + '<small>' + lists[key].length + '</small></button>').join('') + '</div><p class="study-note" id="catalogDescription"></p>' +
      '<label class="study-search-label" for="studyCategorySearch">查找分类或词汇</label><input id="studyCategorySearch" class="study-search" type="search" placeholder="例如：点餐、租房、電車" autocomplete="off">' +
      '<div class="catalog-selection"><div class="study-category-summary"><span id="studySelectedCategories" role="status" aria-live="polite"></span><button type="button" data-catalog-action="clear">清空选择</button></div><div class="catalog-chips" id="catalogChips"></div></div>' +
      '<div class="catalog-toolbar"><span id="catalogResultCount"></span><button type="button" data-catalog-action="select-visible" id="catalogSelectVisible"></button></div><div id="catalogGroups"></div><p class="study-note" id="studyNoCategories" role="status" hidden>没有匹配结果，请试试场景名、日文词或中文释义。</p><div id="catalogPreview"></div>';
    function renderGroups() {
      container.querySelector('#catalogDescription').textContent = descriptions[current];
      container.querySelectorAll('[data-catalog-kind]').forEach(button => button.setAttribute('aria-pressed', button.dataset.catalogKind === current));
      const visible = lists[current].filter(item => item.search.includes(query));
      const groups = [...new Set(visible.map(item => item.group))];
      container.querySelector('#catalogResultCount').textContent = visible.length + ' 个' + (current === 'scene' ? '场景' : '分类') + ' · 可多选';
      const selectAll = container.querySelector('#catalogSelectVisible');
      selectAll.textContent = query ? '全选搜索结果' : '全选' + kinds.find(item => item[0] === current)[1];
      selectAll.disabled = !visible.length;
      container.querySelector('#studyNoCategories').hidden = !!visible.length;
      container.querySelector('#catalogGroups').innerHTML = groups.map((group, index) => '<details class="catalog-group"' + (query || index === 0 ? ' open' : '') + '><summary>' + escape(group) + '<small>' + visible.filter(item => item.group === group).length + ' 类</small></summary><div class="catalog-grid">' + visible.filter(item => item.group === group).map(item =>
        '<button type="button" class="catalog-card" data-catalog-id="' + escape(item.id) + '" aria-pressed="' + selection.includes(item.id) + '"' + (!item.count ? ' disabled' : '') + '><span class="catalog-card-title">' + escape(item.label) + '<small>' + item.count + ' 词</small></span><span class="catalog-card-description">' + escape(item.description) + '</span><span class="catalog-card-words" lang="ja">' + escape(item.words.slice(0, 3).map(v => v.word).join(' · ')) + '</span></button>').join('') + '</div></details>').join('');
    }
    function renderSelection() {
      const words = catalog.select(vocab, selection);
      container.querySelector('#studySelectedCategories').textContent = selection.length ? '已选 ' + selection.length + ' 类 · 共 ' + words.length + ' 词' : '选择一个场景或主题开始';
      container.querySelector('#catalogChips').innerHTML = selection.map(id => '<button type="button" data-catalog-remove="' + escape(id) + '" aria-label="移除' + escape(catalog.label(id)) + '">' + escape(catalog.label(id)) + '<span aria-hidden="true"> ×</span></button>').join('');
      container.querySelectorAll('[data-catalog-id]').forEach(button => button.setAttribute('aria-pressed', selection.includes(button.dataset.catalogId)));
      const preview = container.querySelector('#catalogPreview');
      const wasOpen = preview.querySelector('details')?.open;
      preview.innerHTML = words.length ? '<details class="catalog-preview"' + (wasOpen ? ' open' : '') + '><summary>预览所选词句 <small>前 ' + Math.min(3, words.length) + ' 条</small></summary>' + words.slice(0, 3).map(v => '<article><strong lang="ja">' + escape(v.word) + '</strong><span class="catalog-reading" lang="ja">' + escape(v.reading) + '</span><p>' + escape(v.meaning) + '</p><p lang="ja">' + escape(v.ex_jp) + '</p><p class="catalog-reading" lang="ja">' + escape(v.ex_read) + '</p><p class="study-note">' + escape(v.ex_cn) + '</p></article>').join('') + '</details>' : '';
    }
    function changed() { renderSelection(); onChange(selection.slice()); }
    container.onclick = event => {
      const button = event.target.closest('button');
      if (!button || !container.contains(button)) return;
      if (button.dataset.catalogKind) {
        current = button.dataset.catalogKind; query = ''; container.querySelector('#studyCategorySearch').value = '';
        renderGroups(); onKindChange(current); return;
      }
      if (button.dataset.catalogId) {
        const id = button.dataset.catalogId;
        selection = selection.includes(id) ? selection.filter(value => value !== id) : [...selection, id];
        changed(); return;
      }
      if (button.dataset.catalogRemove) {
        const id = button.dataset.catalogRemove;
        const index = selection.indexOf(id);
        selection = selection.filter(value => value !== id); changed();
        const remaining = container.querySelectorAll('[data-catalog-remove]');
        (remaining[Math.min(index, remaining.length - 1)] || container.querySelector('#studyCategorySearch')).focus({preventScroll: true}); return;
      }
      if (button.dataset.catalogAction === 'clear') { selection = []; changed(); }
      if (button.dataset.catalogAction === 'select-visible') {
        selection = [...new Set([...selection, ...lists[current].filter(item => item.count && item.search.includes(query)).map(item => item.id)])]; changed();
      }
    };
    container.oninput = event => {
      if (event.target.id !== 'studyCategorySearch') return;
      query = event.target.value.trim().toLowerCase(); renderGroups();
    };
    renderGroups(); renderSelection();
  }
  root.CatalogPicker = {mount};
})(window);
