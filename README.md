```bash
yarn add callbag-animation-frames
```

```javascript
const pipe = require("callbag-pipe");
const forEach = require("callbag-for-each");
const animationFrames = require("callbag-animation-frames");

pipe(
  animationFrames,
  forEach(highResTimeStamp => {
    // have fun
  })
);
```

If you're blessed with the [pipeline operator](https://github.com/tc39/proposal-pipeline-operator):

```javascript
animationFrames
  |> forEach(highResTimeStamp => {
    // have fun
  });
```

## Learn more

* [Callbag basics](https://github.com/staltz/callbag-basics)
* [Why we need callbags](https://staltz.com/why-we-need-callbags.html), by André Staltz
* [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) (MDN)
