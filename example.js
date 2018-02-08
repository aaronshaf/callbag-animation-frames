const pipe = require("callbag-pipe");
const forEach = require("callbag-for-each");
const animationFrames = require("./index.js");

const debug = document.querySelector("#debug");

pipe(
  animationFrames,
  forEach(highResTimeStamp => (debug.textContent = String(highResTimeStamp)))
);
