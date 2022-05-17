const combo = [];

/**
 * Determines if the currently executed combo matches a certain pattern.
 * @param combo An array containing the combo keycodes
 * @returns Boolean
 */
const comboMatches = (comboArray) => {
  const comboCopy = JSON.parse(JSON.stringify(combo));

  let matches = 0;
  while (comboCopy.length > 0) {
    matches +=
      comboCopy.shift() === (comboArray[matches] || null) ? 1 : -matches;
  }

  return matches === comboArray.length;
};

document.addEventListener('keydown', (event) => {
  combo.push(event.key);

  setTimeout(() => combo.shift(), 2500);
  if (
    comboMatches([
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ])
  ) {
    combo.splice(0, combo.length);
    const music = new Audio('/assets/wannadie.mp3');
    music.play();
  } /* else if (comboMatches(['c', 'h', 'i', 'n', 'a', '<', '3'])) {
    combo.splice(0, combo.length);
    const music = new Audio('/assets/audio/mao.mp3');
    music.play();
  }*/
});