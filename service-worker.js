"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(i="Object"===i&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,n=new Array(r);i<r;i++)n[i]=e[i];return n}function asyncGeneratorStep(e,r,i,n,a,t,o){try{var c=e[t](o),d=c.value}catch(e){return void i(e)}c.done?r(d):Promise.resolve(d).then(n,a)}function _asyncToGenerator(c){return function(){var e=this,o=arguments;return new Promise(function(r,i){var n=c.apply(e,o);function a(e){asyncGeneratorStep(n,r,i,a,t,"next",e)}function t(e){asyncGeneratorStep(n,r,i,a,t,"throw",e)}a(void 0)})}}var e,i,r;self.define||(e=function(n){"require"!==n&&(n+=".js");var e=Promise.resolve();return(e=!r[n]?new Promise(function(){var r=_asyncToGenerator(regeneratorRuntime.mark(function e(r){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"document"in self?((i=document.createElement("script")).src=n,document.head.appendChild(i),i.onload=r):(importScripts(n),r());case 1:case"end":return e.stop()}},e)}));return function(e){return r.apply(this,arguments)}}()):e).then(function(){if(!r[n])throw new Error("Module ".concat(n," didn’t register its module"));return r[n]})},i=function(r,i){Promise.all(r.map(e)).then(function(e){return i(1===e.length?e[0]:e)})},r={require:Promise.resolve(i)},self.define=function(a,t,o){r[a]||(r[a]=Promise.resolve().then(function(){var i={},n={uri:location.origin+a.slice(1)};return Promise.all(t.map(function(r){switch(r){case"exports":return i;case"module":return n;default:return e(r)}})).then(function(e){e=o.apply(void 0,_toConsumableArray(e));return i.default||(i.default=e),i})}))}),define("./service-worker.js",["./workbox-21410b98"],function(e){self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/06/04/hello-world/index.html",revision:"e1e47be289dd84fafcdc8cffa3b92d92"},{url:"2021/07/15/one/index.html",revision:"1697e80073a465ab6abbe7ca973a538b"},{url:"404.html",revision:"c349b74358e9c9a98bea4a8f86ec13a6"},{url:"about/index.html",revision:"4a4db897a30c0dd518ce8a3c9e36dd9d"},{url:"archives/2021/06/index.html",revision:"d343513fae1214a46ee8e20fe39ba19a"},{url:"archives/2021/07/index.html",revision:"4234d86783241974d8b5afadbb785eb5"},{url:"archives/2021/index.html",revision:"e334c7bcc2e26509acb47bc5f4715e71"},{url:"archives/index.html",revision:"ec399094f412f5e80efc5a2298c472f4"},{url:"categories/index.html",revision:"b9d74040f944bae1110be11bf29d151f"},{url:"categories/面试/index.html",revision:"17690401b4c487261d247c0cee157d54"},{url:"css/index.css",revision:"6d909cbed207e57181417ed06efa744c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.jpg",revision:"6440269b6de7dc2495d190cd1db3307d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index_img1.jpg",revision:"a15c9d4dd48986974acd43e8b722350d"},{url:"img/index_img2.jpg",revision:"4166bab200ff5dcc8e4caf356e948423"},{url:"img/index_img3.jpg",revision:"9eb8f44c961ecf5d6278855ade3074dc"},{url:"img/index_img4.jpg",revision:"147c05dfaef220ebd27dfc93bc941bd3"},{url:"img/index_img5.jpg",revision:"82f897333434b3ffd04910c4a384e596"},{url:"img/index_img6.jpg",revision:"6f7460c4bddac30226f1c085ae39bab3"},{url:"index.html",revision:"69352683ecd6cb2196c6761a3645bbdc"},{url:"js/main.js",revision:"6452bb991e88e6359e760e3b5c69ebf0"},{url:"js/search/algolia.js",revision:"9f72ef8b8fdda25a767a787cd4bf9121"},{url:"js/search/local-search.js",revision:"87ebbb22dbb26d65beb6d4b445be2452"},{url:"js/tw_cn.js",revision:"0310e94ad716c794eadcb0fddfab0a2a"},{url:"js/utils.js",revision:"5ababdf577f19dad461230cd061df72a"},{url:"link/index.html",revision:"7bfce964e131764dd48b6860647859b5"},{url:"tags/ES6/index.html",revision:"16abc0fc9ee9f39121d777a43c6fa777"},{url:"tags/index.html",revision:"c00b82a46d498e2635566bf9df2a8916"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")});