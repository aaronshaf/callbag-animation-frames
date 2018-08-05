import share from 'callbag-share';

export default /* #__PURE__ */ share(function (start, sink) {
  if (start !== 0) return;
  var id;

  function nextCb(ms) {
    sink(1, ms);
    next();
  }

  function next() {
    id = requestAnimationFrame(nextCb);
  }

  next();

  sink(0, function (t) {
    if (t === 2) cancelAnimationFrame(id);
  });
});
