/* Keyboard access for legacy click targets and a consistent navigation icon set. */
(function () {
  const paths = {
    home: '<path d="m3 10 9-7 9 7v10H3zM9 20v-7h6v7"/>',
    book: '<path d="M12 5v16M12 5C9 3 5 3 2 4v15c4-1 7-1 10 2 3-3 6-3 10-2V4c-3-1-7-1-10 1Z"/>',
    review: '<path d="M6 3h13v18H6a3 3 0 0 1 0-6h13M6 3a3 3 0 0 0-3 3v12M9 7h6M9 10h4"/>',
    camera: '<path d="M8 5 10 2h4l2 3h5v16H3V5z"/><circle cx="12" cy="12" r="4"/>',
    plan: '<rect x="4" y="5" width="16" height="17" rx="2"/><path d="M8 2v6M16 2v6M4 10h16M8 14h3M8 18h7"/>',
    game: '<path d="M7 7h10c3 0 4 3 5 10 .4 3-3 4-5 1l-1-2H8l-1 2c-2 3-5.4 2-5-1 1-7 2-10 5-10Z M7 10v5M4.5 12.5h5"/><circle cx="16" cy="11" r=".6"/><circle cx="18.5" cy="14" r=".6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    settings: '<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="3"/><circle cx="15" cy="17" r="3"/>'
  };
  const icon = name => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths[name] + '</svg>';
  for (const [selector, name] of [
    ['[data-section="home"] .bottombar__icon', 'home'], ['[data-section="learn"] .bottombar__icon', 'book'],
    ['[data-section="review"] .bottombar__icon', 'review'], ['[data-section="practice"] .bottombar__icon', 'target'],
    ['[data-section="settings"] .bottombar__icon', 'settings'], ['.pair-card-scan .pair-card-icon', 'camera'],
    ['.pair-card-autoplay .pair-card-icon', 'book'], ['.plan-entry-icon', 'plan'], ['.game-wide-icon', 'game']
  ]) document.querySelectorAll(selector).forEach(el => { el.innerHTML = icon(name); });

  function enhance(node) {
    if (node.nodeType !== 1) return;
    const targets = [...node.querySelectorAll('[onclick]')];
    if (node.matches('[onclick]')) targets.push(node);
    targets.forEach(el => {
      if (!['DIV', 'SPAN'].includes(el.tagName)) return;
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
    });
  }
  enhance(document.body);
  document.addEventListener('keydown', event => {
    if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[role="button"][onclick]')) {
      event.preventDefault();
      event.target.click();
    }
  });
  new MutationObserver(records => records.forEach(r => r.addedNodes.forEach(enhance))).observe(document.body, { childList: true, subtree: true });
})();
