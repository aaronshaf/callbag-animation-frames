import pipe from "callbag-pipe";
import forEach from "callbag-for-each";
import animationFrames from "..";

const debug = document.querySelector("#debug");

pipe(
  animationFrames,
  forEach(highResTimeStamp => (debug.textContent = String(highResTimeStamp)))
);
