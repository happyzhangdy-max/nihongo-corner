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
    const menu = document.querySelector('.theme-menu');
    const picker = document.getElementById('themePanel');
    const toggle = document.getElementById('themeToggle');
    if (!menu || !picker || !toggle) return;
    const status = document.getElementById('themeStatus');
    function render() {
      picker.querySelectorAll('[data-theme-choice]').forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.themeChoice === current));
      });
    }
    render();
    menu.hidden = false;
    function close(restoreFocus) {
      picker.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      if (restoreFocus) toggle.focus({preventScroll: true});
    }
    toggle.addEventListener('click', () => {
      if (!picker.hidden) return close(false);
      picker.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      picker.querySelector('[aria-pressed="true"]')?.focus({preventScroll: true});
    });
    document.addEventListener('pointerdown', event => {
      if (!picker.hidden && !menu.contains(event.target)) close(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !picker.hidden) {
        event.preventDefault();
        close(true);
      }
    });
    menu.addEventListener('focusout', event => {
      if (!picker.hidden && event.relatedTarget && !menu.contains(event.relatedTarget)) close(false);
    });
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
