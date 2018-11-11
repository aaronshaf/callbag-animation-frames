import share from 'callbag-share';

export default share((start, sink) => {
  if (start !== 0) return;
  let id;

  function nextCb(ms) {
    next();
    sink(1, ms);
  }

  function next() {
    id = requestAnimationFrame(nextCb);
  }

  next();

  sink(0, t => {
    if (t === 2) cancelAnimationFrame(id);
  });
});
