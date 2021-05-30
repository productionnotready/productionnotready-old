/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1970/01/01/markdown/index.html",
    "revision": "85c600db312705c8324a7bd0fc9b667d"
  },
  {
    "url": "2021/05/30/hello-world/index.html",
    "revision": "6b7bff5e4365723a05e26db701aa6806"
  },
  {
    "url": "404.html",
    "revision": "ee6b620f3a6ffb480c455712609c5baf"
  },
  {
    "url": "assets/css/0.styles.b025bdb8.css",
    "revision": "042a3eda5e863b131af67a9e832b6cca"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ce7c8932.js",
    "revision": "1879f7fbb0e3b866b86bd51e12071335"
  },
  {
    "url": "assets/js/11.6727ba7d.js",
    "revision": "69bbe92d41b09e10fe18eaafb7a4e2bd"
  },
  {
    "url": "assets/js/12.57a2bdcb.js",
    "revision": "472e4fe4525b5329f41054d8427fbce4"
  },
  {
    "url": "assets/js/13.cfab5f93.js",
    "revision": "63d97355dfb3a0b0a8042468e3189c2a"
  },
  {
    "url": "assets/js/14.b100fa35.js",
    "revision": "24eac2c3d899dc6628fc05e06a1ed35e"
  },
  {
    "url": "assets/js/15.79244866.js",
    "revision": "7b8cac34284a2aa221f41ce27ab72337"
  },
  {
    "url": "assets/js/16.96eaf489.js",
    "revision": "1ff3f009388b606dcca15b14d198cfcb"
  },
  {
    "url": "assets/js/3.33bcf755.js",
    "revision": "f54a9689766a5a04c36a1aa51ea814be"
  },
  {
    "url": "assets/js/4.36e82b27.js",
    "revision": "064deb803cc1fc9918ba337f433d17b6"
  },
  {
    "url": "assets/js/5.095dbcb5.js",
    "revision": "8dcceca1f0cc850b992ec33bb501152e"
  },
  {
    "url": "assets/js/6.eb774d15.js",
    "revision": "54446ec6585b4b6a6733269443cb38e5"
  },
  {
    "url": "assets/js/7.f649a1c9.js",
    "revision": "830cdb15b6e41052198369cb29c8954c"
  },
  {
    "url": "assets/js/8.840f9a55.js",
    "revision": "f75458a11ae1dfb6cca157076e6157e6"
  },
  {
    "url": "assets/js/9.c7f03ff8.js",
    "revision": "8a62a7cc7a0739dbbd7255ef82dec88e"
  },
  {
    "url": "assets/js/app.b9d04055.js",
    "revision": "cacfa55abf190137c983c85f10ce8738"
  },
  {
    "url": "assets/js/vuejs-paginate.80342f30.js",
    "revision": "0e9ca3e8300dd1fb0ee853b4888ca432"
  },
  {
    "url": "index.html",
    "revision": "2573f4277dfb95cb2b01cc715d7f6e5b"
  },
  {
    "url": "posts/index.html",
    "revision": "c98650bfea31e1210c5aa14810c74fd4"
  },
  {
    "url": "tag/index.html",
    "revision": "9537fb9306c534fecb990fa92baa5734"
  },
  {
    "url": "tag/test/index.html",
    "revision": "9e1f280cb610e7ae06112e7fe52e5aa5"
  },
  {
    "url": "tests/index.html",
    "revision": "5807af132359eafe5ced945ff51f5e34"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
