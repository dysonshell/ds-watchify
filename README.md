# ds-watchify
watchify module for dysonshell

`ds-watchify` 和 `ds-build` 分别在开发环境与生产环境做 js 的编译合并压缩处理。

`ds-watchify` 会在开发时做文件服务器即时编译，为了效率会对已有的 js 做缓存并处理好缓存更新。

需要注意的是，只有在 `dsc/*/js/main/` 目录下的 js 文件会在 browserify 编译并且做公用库的准备（jQuery、lodash、moment等），对于 `dsc/*/js/` 下非 `main/` 目录下的 js 文件，会原样返回（上生产只做压缩不做其他处理）。如果需要用公共库，只要加两行代码 wrap 就行：

```js
'use strict';(function () { return typeof window.QAS === 'function' ? QAS : function (fn) { (window._qas_queue || (window._qas_queue = [])).push([fn, Array.prototype.slice.call(arguments, 1)]); }; }()(function () {
// 这个回掉里就会准备好 window.$ window._ 等公共库
}));
```
