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
    "revision": "b053c71a2f21c81c140cf3bcc665dfae"
  },
  {
    "url": "2021/05/30/markdown/index.html",
    "revision": "6ee53e46f73f04cff46c651530b87652"
  },
  {
    "url": "2021/06/06/web-and-mobile-app-devt-on-apple-silicon/index.html",
    "revision": "0167104d56956bd71b806008fd67cbd9"
  },
  {
    "url": "2021/06/20/the-next-cobol/index.html",
    "revision": "83bd01472911555c285f870a572d26eb"
  },
  {
    "url": "2021/08/22/trying-out-astro-framework/index.html",
    "revision": "e23ddcb0d9b92155f411a6eeb6034172"
  },
  {
    "url": "404.html",
    "revision": "58c48aeb52d6e7230e21630315a26f81"
  },
  {
    "url": "about.html",
    "revision": "8160b8f0d9852480448e0284affeca93"
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
    "url": "assets/js/10.2839097e.js",
    "revision": "49d33f55f1ab4aa56bdd58eefa5582bd"
  },
  {
    "url": "assets/js/11.0c4d659e.js",
    "revision": "094f2b143cfd3c7f351024adefdf5903"
  },
  {
    "url": "assets/js/12.2cf85a2e.js",
    "revision": "40ef2c41a9eb094834007ed601665dfc"
  },
  {
    "url": "assets/js/13.f6d98650.js",
    "revision": "2c78392392cc0dd627c25a1ebbbd3bb4"
  },
  {
    "url": "assets/js/14.ac834385.js",
    "revision": "dec9f83d2ef16985a80aca3d8c9d8176"
  },
  {
    "url": "assets/js/15.fa84ca8c.js",
    "revision": "56db8f5bd24959cb95278723802d631c"
  },
  {
    "url": "assets/js/16.7fdc1735.js",
    "revision": "b04476ec3b286d73e74a2014c075336d"
  },
  {
    "url": "assets/js/17.5d4517b9.js",
    "revision": "a68ebabe51de2d5c650520647c8097a4"
  },
  {
    "url": "assets/js/18.bf4ab768.js",
    "revision": "cea252ec4ab3748a03d9f79b969b7d47"
  },
  {
    "url": "assets/js/19.1948c226.js",
    "revision": "5e1e6c00a0d96c95ca91ad14e8166e6a"
  },
  {
    "url": "assets/js/3.56513107.js",
    "revision": "bda98afa0ef4341f480535ba1dfbfafc"
  },
  {
    "url": "assets/js/4.35cfe8fc.js",
    "revision": "fd9ebba0fe2124c4b509867901eefff9"
  },
  {
    "url": "assets/js/5.bc8881bd.js",
    "revision": "a2ad7f0a8c0c980f54e343fcddd58a3f"
  },
  {
    "url": "assets/js/6.a54a8f90.js",
    "revision": "b1e4f2c4534b81f9b15b4747b23832a7"
  },
  {
    "url": "assets/js/7.18f66913.js",
    "revision": "3b299e997fbd68557ee13e10e0fd3c1d"
  },
  {
    "url": "assets/js/8.880fd489.js",
    "revision": "48bda38987222bcf2c5f4e1955be1a50"
  },
  {
    "url": "assets/js/9.56af0ae8.js",
    "revision": "271c8c804fdfd5859cad70bc475a5e22"
  },
  {
    "url": "assets/js/app.f81c84ca.js",
    "revision": "2f51f78489c74be93ebdbab913873411"
  },
  {
    "url": "assets/js/vuejs-paginate.80342f30.js",
    "revision": "0e9ca3e8300dd1fb0ee853b4888ca432"
  },
  {
    "url": "index.html",
    "revision": "ebdc603810f11b41879afd866b88c164"
  },
  {
    "url": "tag/apple silicon/index.html",
    "revision": "013714462a4caa5f8a75b15574b42f96"
  },
  {
    "url": "tag/index.html",
    "revision": "191b1849d19eae5b18e9619687b3ac9c"
  },
  {
    "url": "tag/macbook/index.html",
    "revision": "e94e8904e46fdbb5c276e9d802e755eb"
  },
  {
    "url": "tag/static site generators/index.html",
    "revision": "58f442aa9dc45b934d01e154c7daf9ae"
  },
  {
    "url": "tag/test/index.html",
    "revision": "3b894717825c9cd84db9a30701c63e05"
  },
  {
    "url": "tag/thoughts/index.html",
    "revision": "4969816a1ffc38aaf178613beeb9260c"
  },
  {
    "url": "tests/index.html",
    "revision": "eb6d41ee46b71bf7fbd9cd3debf9b8e6"
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
