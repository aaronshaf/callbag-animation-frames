var START = 0;
var DATA = 1;
var TERMINATE = 2;

var request;

var isActivated = false;

var listeners = [];

function rafLoop(highResTimeStamp /* DOMHighResTimeStamp */) {
  listeners.forEach(function(listener) {
    return listener(highResTimeStamp);
  });
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

  var listener = function(gamepads) {
    return sink(DATA, gamepads);
  };

  listeners.push(listener);

  var talkback = function(type, d) {
    if (type === TERMINATE) {
      listeners.splice(listeners.indexOf(listener), 1);
      if (listeners.length === 0) {
        deactivate();
      }
    }
  };

  sink(START, talkback);

  activate();
}

module.exports = function(start, sink) {
  return animationFrames(start, sink);
};
