if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,r,c)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const s={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return d;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-21410b98"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/06/04/hello-world/index.html",revision:"115f6f18fdd3583af408f1999468d516"},{url:"2021/07/15/one/index.html",revision:"82a9daf879de0d7563084a7d2adace5f"},{url:"404.html",revision:"289a2833d4c84c73630fa1199d3ec152"},{url:"about/index.html",revision:"614350d4616ec14b999e675a1b7ccaf1"},{url:"archives/2021/06/index.html",revision:"e33be87154903159ee721a0bd6ff5e2b"},{url:"archives/2021/07/index.html",revision:"d0b48c2a048f8baa9434c0f3c6820b31"},{url:"archives/2021/index.html",revision:"cfddddebdfe894d8f381141ccb1099e3"},{url:"archives/index.html",revision:"77904e82a08cd215d5753f17cbb14297"},{url:"categories/index.html",revision:"b73c34b48e224ae38c7253ad2b1edc51"},{url:"categories/面试/index.html",revision:"c5ffdc91c2897ebe4141ad8948d56dfd"},{url:"css/index.css",revision:"6d909cbed207e57181417ed06efa744c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/cover_01.jpg",revision:"c6b0c07d51d20ea02bf98659ec2c808f"},{url:"img/favicon.jpg",revision:"6440269b6de7dc2495d190cd1db3307d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index_img1.jpg",revision:"a15c9d4dd48986974acd43e8b722350d"},{url:"img/index_img10.jpg",revision:"1d13a7a574340c6ddccbc756535d20b9"},{url:"img/index_img2.jpg",revision:"4166bab200ff5dcc8e4caf356e948423"},{url:"img/index_img3.jpg",revision:"9eb8f44c961ecf5d6278855ade3074dc"},{url:"img/index_img4.jpg",revision:"147c05dfaef220ebd27dfc93bc941bd3"},{url:"img/index_img5.jpg",revision:"82f897333434b3ffd04910c4a384e596"},{url:"img/index_img6.jpg",revision:"6f7460c4bddac30226f1c085ae39bab3"},{url:"img/index_img7.jpg",revision:"5720cc61126aae0af5c608ae3b4c8eab"},{url:"img/index_img8.jpg",revision:"7846d8a2c0c0056ca605cb5a53e5217a"},{url:"img/index_img9.jpg",revision:"d65cfb5b602d5d41349a06f21155b65f"},{url:"img/top_img_01.jpg",revision:"996b52e9336fa236f5a4035070538996"},{url:"index.html",revision:"0438fdefd13c32d6cf129a2fceb50ec3"},{url:"js/main.js",revision:"6ad05147cd8e3938d87c03dc9048c8c2"},{url:"js/search/algolia.js",revision:"c97489be2463a5994d3168663ce42036"},{url:"js/search/local-search.js",revision:"87ebbb22dbb26d65beb6d4b445be2452"},{url:"js/tw_cn.js",revision:"3418dfa3c79d53bae0c6518df6ece91a"},{url:"js/utils.js",revision:"bc2041e4815ef235477c35d4cdd66c90"},{url:"link/index.html",revision:"4dad8ef1d356bf05ca8779c7aee8ed66"},{url:"tags/ES6/index.html",revision:"5558f7d28af5a913eb9f8c920d4c0f33"},{url:"tags/index.html",revision:"43d8af0e20200bbfdb4657d657e31c4f"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
