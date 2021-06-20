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
    "revision": "4a1d86a4a2e741db2cee150d8f508bed"
  },
  {
    "url": "2021/05/30/markdown/index.html",
    "revision": "9ea3e7156782b65aea7a9fbdf27c73a3"
  },
  {
    "url": "2021/06/06/web-and-mobile-app-devt-on-apple-silicon/index.html",
    "revision": "04e4caad1e74a4291f11e4cdc249d54a"
  },
  {
    "url": "2021/06/20/the-next-cobol/index.html",
    "revision": "1722a92a71d2843541fd4dbf8674690b"
  },
  {
    "url": "404.html",
    "revision": "d63ffff241451e147a8473af256f601f"
  },
  {
    "url": "about.html",
    "revision": "5264c98b9fb1441acbd9d63fd144d827"
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
    "url": "assets/js/15.185e8d42.js",
    "revision": "da8899f1685e0fce5139d39741e30fdd"
  },
  {
    "url": "assets/js/16.da7161c5.js",
    "revision": "210156c3ff5204a3e08fe30fae0714ba"
  },
  {
    "url": "assets/js/17.6b681938.js",
    "revision": "1ae656184898750ece3a243e4dddaa90"
  },
  {
    "url": "assets/js/18.bdc2c75b.js",
    "revision": "788d2322df3b1eb464f93da9f91bb6e2"
  },
  {
    "url": "assets/js/3.544de9d5.js",
    "revision": "9104755fc1fb276f397ac0178ce46784"
  },
  {
    "url": "assets/js/4.789c1499.js",
    "revision": "627797a2391c78779c212a50e8cb8411"
  },
  {
    "url": "assets/js/5.443fafeb.js",
    "revision": "fb56e2d3892b3953e8b5f4f5dcca1a7c"
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
    "url": "assets/js/app.0b7403e2.js",
    "revision": "5ad78cd55caf02184c57c75c4dac17e3"
  },
  {
    "url": "assets/js/vuejs-paginate.80342f30.js",
    "revision": "0e9ca3e8300dd1fb0ee853b4888ca432"
  },
  {
    "url": "index.html",
    "revision": "1cb4536ec4c28ddb4230d5c5c038bdc4"
  },
  {
    "url": "tag/apple silicon/index.html",
    "revision": "728b5cc3af7836adad4892e94849c0ac"
  },
  {
    "url": "tag/index.html",
    "revision": "a2c456099e3a1a8c2554c40bbca7f9cf"
  },
  {
    "url": "tag/macbook/index.html",
    "revision": "6884ed2d4ceadeb7e3b39a2dd6861e73"
  },
  {
    "url": "tag/test/index.html",
    "revision": "e802589654f1d247bc1d7aa45aee2bf2"
  },
  {
    "url": "tag/thoughts/index.html",
    "revision": "67ad560085be032c487d1c47cc2fec55"
  },
  {
    "url": "tests/index.html",
    "revision": "2553e8a9cb54c0c793ba231b5426104c"
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
