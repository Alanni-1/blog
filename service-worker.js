"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(i="Object"===i&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,n=new Array(r);i<r;i++)n[i]=e[i];return n}function asyncGeneratorStep(e,r,i,n,a,t,o){try{var c=e[t](o),d=c.value}catch(e){return void i(e)}c.done?r(d):Promise.resolve(d).then(n,a)}function _asyncToGenerator(c){return function(){var e=this,o=arguments;return new Promise(function(r,i){var n=c.apply(e,o);function a(e){asyncGeneratorStep(n,r,i,a,t,"next",e)}function t(e){asyncGeneratorStep(n,r,i,a,t,"throw",e)}a(void 0)})}}var e,i,r;self.define||(e=function(n){"require"!==n&&(n+=".js");var e=Promise.resolve();return(e=!r[n]?new Promise(function(){var r=_asyncToGenerator(regeneratorRuntime.mark(function e(r){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"document"in self?((i=document.createElement("script")).src=n,document.head.appendChild(i),i.onload=r):(importScripts(n),r());case 1:case"end":return e.stop()}},e)}));return function(e){return r.apply(this,arguments)}}()):e).then(function(){if(!r[n])throw new Error("Module ".concat(n," didn’t register its module"));return r[n]})},i=function(r,i){Promise.all(r.map(e)).then(function(e){return i(1===e.length?e[0]:e)})},r={require:Promise.resolve(i)},self.define=function(a,t,o){r[a]||(r[a]=Promise.resolve().then(function(){var i={},n={uri:location.origin+a.slice(1)};return Promise.all(t.map(function(r){switch(r){case"exports":return i;case"module":return n;default:return e(r)}})).then(function(e){e=o.apply(void 0,_toConsumableArray(e));return i.default||(i.default=e),i})}))}),define("./service-worker.js",["./workbox-21410b98"],function(e){self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/06/04/hello-world/index.html",revision:"b12e036ae4bde3aedd1679e1cf7f5e66"},{url:"404.html",revision:"fecb2f218820c821bc092fd137816804"},{url:"about/index.html",revision:"97723018c87bfa223a6ea41073f012c4"},{url:"archives/2021/06/index.html",revision:"a1032704ad30e89dca5f0592e117c32b"},{url:"archives/2021/index.html",revision:"d0c9809748c10dfd5b4f4a82e4ffa4b6"},{url:"archives/index.html",revision:"ab35b47b7d72723fcd028104ec7b50ae"},{url:"categories/hai/index.html",revision:"bcfa804e34ba9238fdbaa448b1953c27"},{url:"categories/index.html",revision:"00e3e98950854e6e4188adb078688a7d"},{url:"css/index.css",revision:"6d909cbed207e57181417ed06efa744c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"c5b92c62b5427f3453b2552ac6222866"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.jpg",revision:"8f34d7bc98261cc6f7d685363698234f"},{url:"img/favicon.png",revision:"0aa4cda99e796aa19fe7d9e16c811336"},{url:"img/favicon1.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index_img1.jpg",revision:"a15c9d4dd48986974acd43e8b722350d"},{url:"img/index_img10.jpg",revision:"cafc29dd6b9ae39bd7615d49d0966bb7"},{url:"img/index_img2.jpg",revision:"ca425a4158d155ce53e06a569b668a17"},{url:"img/index_img3.jpg",revision:"d1ff45d703de675fe2c2e72fa72aeffc"},{url:"img/index_img4.jpg",revision:"330ebd91f694868897da050d2f83d56c"},{url:"img/index_img5.jpg",revision:"713e1e1546f6fdffd9d4a0513f169b86"},{url:"img/index_img6.jpg",revision:"215a3b07402cb9e262801acbc52e05cb"},{url:"img/index_img7.jpg",revision:"02b2e1805d40aba2ab7cd6cdf5bdc4a8"},{url:"img/index_img8.jpg",revision:"9a4af56e95443fba75e8c688f3662a44"},{url:"img/index_img9.jpg",revision:"1e0ff62206df6d0cb8407b04b2f62f08"},{url:"index.html",revision:"ad3f0c7342d5950ad5793385c9ffd2ff"},{url:"js/main.js",revision:"6452bb991e88e6359e760e3b5c69ebf0"},{url:"js/search/algolia.js",revision:"9f72ef8b8fdda25a767a787cd4bf9121"},{url:"js/search/local-search.js",revision:"87ebbb22dbb26d65beb6d4b445be2452"},{url:"js/tw_cn.js",revision:"0310e94ad716c794eadcb0fddfab0a2a"},{url:"js/utils.js",revision:"5ababdf577f19dad461230cd061df72a"},{url:"link/index.html",revision:"7abbdf8abda9f562842b609acc0e4280"},{url:"tags/index.html",revision:"8a62aa005d64b2b8ef5fc81f7476a32c"},{url:"tags/爱好/index.html",revision:"273cbbb01e3ada658e32537b67b212f4"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")});