/* Sentence playback advances on speech completion, never a fixed card duration. */
(function (root) {
  'use strict';
  function createPlayer({speech, Utterance, onUpdate = () => {}, onError = () => {}, timers = root}) {
    let queue = [], index = 0, status = 'idle', generation = 0, gapTimer = null, watchdog = null, gap = 2000;
    const snapshot = () => ({status, index, total: queue.length, item: queue[index] || null});
    const update = () => onUpdate(snapshot());
    function cancel() {
      generation++;
      timers.clearTimeout(gapTimer); timers.clearTimeout(watchdog);
      gapTimer = watchdog = null;
      if (speech) speech.cancel();
    }
    function fail(message) { cancel(); status = 'paused'; update(); onError(message); }
    function speakCurrent() {
      cancel();
      if (!speech || !Utterance) return fail('当前浏览器不支持语音播放，请使用支持语音的浏览器。');
      if (!queue[index]) { status = 'complete'; update(); return; }
      const token = generation;
      status = 'playing'; update();
      const utterance = new Utterance(queue[index].jp);
      utterance.lang = 'ja-JP'; utterance.rate = 0.85;
      const voice = (speech.getVoices ? speech.getVoices() : []).find(v => /^ja\b/i.test(v.lang));
      if (voice) utterance.voice = voice;
      utterance.onend = () => {
        if (token !== generation || status !== 'playing') return;
        timers.clearTimeout(watchdog); watchdog = null;
        status = 'gap'; update();
        gapTimer = timers.setTimeout(() => {
          if (token !== generation || status !== 'gap') return;
          index++;
          if (index >= queue.length) { status = 'complete'; update(); }
          else speakCurrent();
        }, gap);
      };
      utterance.onerror = () => { if (token === generation) fail('这句未能播放，请点继续重试；也可以先看句子练习。'); };
      watchdog = timers.setTimeout(() => { if (token === generation) fail('语音播放没有响应，请点继续重试。'); }, 60000);
      try { speech.speak(utterance); } catch (_) { fail('语音暂不可用，请点继续重试。'); }
    }
    function start(items, options = {}) {
      cancel(); queue = items.filter(item => item && typeof item.jp === 'string' && item.jp.trim()); index = 0;
      gap = [1000, 2000, 4000].includes(options.gap) ? options.gap : 2000;
      if (!queue.length) { status = 'idle'; update(); return; }
      speakCurrent();
    }
    function pause() { if (status === 'playing' || status === 'gap') { cancel(); status = 'paused'; update(); } }
    function resume() { if (status === 'paused') speakCurrent(); }
    function move(step) {
      const next = index + step;
      if (next < 0 || next >= queue.length) return;
      const paused = status === 'paused'; cancel(); index = next;
      if (paused) { status = 'paused'; update(); } else speakCurrent();
    }
    function stop() { cancel(); queue = []; index = 0; status = 'idle'; update(); }
    return {start, pause, resume, stop, next: () => move(1), previous: () => move(-1), snapshot};
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = {createPlayer};
  root.SceneAudio = {createPlayer};
})(typeof window !== 'undefined' ? window : globalThis);
