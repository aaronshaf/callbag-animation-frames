const START = 0;
const DATA = 1;
const TERMINATE = 2;

let request;

let isActivated = false;

const listeners = [];

function rafLoop(highResTimeStamp /* DOMHighResTimeStamp */) {
  listeners.forEach(listener => listener(highResTimeStamp));
  request = requestAnimationFrame(rafLoop);
}

function activate() {
  if (isActivated) return;
  isActivated = true;
  request = requestAnimationFrame(rafLoop);
}

function deactivate() {
  isActivated = false;
  window.cancelAnimationFrame(request);
}

function animationFrames(start, sink) {
  if (start !== START) return;

  let listener = gamepads => sink(DATA, gamepads);

  listeners.push(listener);

  const talkback = (type, d) => {
    if (type === TERMINATE) {
      listeners.splice(array.indexOf(listener), 1);
      if (listeners.length === 0) {
        deactivate();
      }
    }
  };

  sink(START, talkback);

  activate();
}

module.exports = (start, sink) => animationFrames(start, sink);
