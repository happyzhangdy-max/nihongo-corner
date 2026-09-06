/* Apply the saved palette before the page paints; study data uses separate keys. */
(function () {
  'use strict';
  const key = 'nihongo_theme_v1';
  const names = {night: '夜色', paper: '和纸', sakura: '樱花', ocean: '深海'};
  const valid = value => Object.prototype.hasOwnProperty.call(names, value);
  let current = 'night';
  try {
    const saved = localStorage.getItem(key);
    if (valid(saved)) current = saved;
  } catch (_) { /* A blocked store must not prevent switching for this visit. */ }
  document.documentElement.dataset.theme = current;

  function init() {
    const picker = document.querySelector('.theme-picker');
    if (!picker) return;
    const status = document.getElementById('themeStatus');
    function render() {
      picker.querySelectorAll('[data-theme-choice]').forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.themeChoice === current));
      });
    }
    render();
    picker.hidden = false;
    picker.addEventListener('click', event => {
      const button = event.target.closest('[data-theme-choice]');
      if (!button || !picker.contains(button) || !valid(button.dataset.themeChoice)) return;
      current = button.dataset.themeChoice;
      document.documentElement.dataset.theme = current;
      let saved = true;
      try { localStorage.setItem(key, current); } catch (_) { saved = false; }
      render();
      status.textContent = '已切换至' + names[current] + (saved ? '，下次打开会保留' : '，本次选择暂时无法保存');
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true});
  else init();
})();
