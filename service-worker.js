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
    "url": "2021/05/30/hello-world/index.html",
    "revision": "50fb07c13728d045ef9b9869cc825361"
  },
  {
    "url": "2021/05/30/markdown/index.html",
    "revision": "9b56a343f631204b2364e0945b3aa0ba"
  },
  {
    "url": "2021/06/06/web-and-mobile-app-devt-on-apple-silicon/index.html",
    "revision": "16f21140c743e5b24544df3cf0b0e0c5"
  },
  {
    "url": "404.html",
    "revision": "8fc2e152eb61b3ed1870a16cd9e70efe"
  },
  {
    "url": "about.html",
    "revision": "f55e08a882275885194cc11dfb3100e1"
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
    "url": "assets/js/13.3e0db58c.js",
    "revision": "3e481470393e57c8872ead9023b5e72d"
  },
  {
    "url": "assets/js/14.987eada3.js",
    "revision": "ca67ddb04fca2c355157e9f284707035"
  },
  {
    "url": "assets/js/15.79244866.js",
    "revision": "7b8cac34284a2aa221f41ce27ab72337"
  },
  {
    "url": "assets/js/16.c9028855.js",
    "revision": "1e340056afa52d597cf31eb3ab4dc946"
  },
  {
    "url": "assets/js/17.b50ef90b.js",
    "revision": "dc8cd6cb0b57da61d32a8aab4c900dd5"
  },
  {
    "url": "assets/js/3.8eafd426.js",
    "revision": "fd58dda549e940a967763fac8179a36f"
  },
  {
    "url": "assets/js/4.5cb9b945.js",
    "revision": "63bb0f3457c5f9156a3d0bd2a1ede5c3"
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
    "url": "assets/js/7.d0fb346e.js",
    "revision": "674c5b0b9decd5f0407ec939dc6514ea"
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
    "url": "assets/js/app.89a59320.js",
    "revision": "8129158363e11e6a8628691f77114229"
  },
  {
    "url": "assets/js/vuejs-paginate.80342f30.js",
    "revision": "0e9ca3e8300dd1fb0ee853b4888ca432"
  },
  {
    "url": "index.html",
    "revision": "2ba327257fd50350acd7edfe251bb735"
  },
  {
    "url": "tag/apple silicon/index.html",
    "revision": "22fab669215a890aaaa423dd457b4ddd"
  },
  {
    "url": "tag/index.html",
    "revision": "93b5fbb0b059100622e65051c0de3c8d"
  },
  {
    "url": "tag/macbook/index.html",
    "revision": "1a06b9287fd4f21eff0c6ebbfd4c3acd"
  },
  {
    "url": "tag/test/index.html",
    "revision": "6317b524005fa82254b748c2091cfcb1"
  },
  {
    "url": "tests/index.html",
    "revision": "3c512d1370ffc3b1eba3875488573fb8"
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
