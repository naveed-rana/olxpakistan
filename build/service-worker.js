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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "16x16.ico",
    "revision": "1621d279edd4a9d24aa7d3e7aeff8bc5"
  },
  {
    "url": "192x192.png",
    "revision": "ad1cb65aab445431880c825c63ac5ee1"
  },
  {
    "url": "246x0w.jpg",
    "revision": "a6cccd47dbd7dba3c63857fa32188c41"
  },
  {
    "url": "24x24.ico",
    "revision": "f225628d426759a9c6ae8b5195fe264d"
  },
  {
    "url": "512x512.png",
    "revision": "80e52287cf63185f67d3f007e285eadc"
  },
  {
    "url": "app.js",
    "revision": "39c805cd4605c7e0325cb207efedb3d0"
  },
  {
    "url": "favicon.ico",
    "revision": "a7f9d4ddd9ac3f4d04293521afa1620e"
  },
  {
    "url": "index.html",
    "revision": "ed370d02f3e4583f744f6c53bdcec637"
  },
  {
    "url": "loader.gif",
    "revision": "0f02a37eacae8ee97a51dee81b41c31d"
  },
  {
    "url": "static/css/main.2f1c28e7.css",
    "revision": "6cdd2e19bfb78e134ef45af56e066eff"
  },
  {
    "url": "static/js/main.8492b36f.js",
    "revision": "d61d90138a883794a4b352fb31ed820b"
  },
  {
    "url": "static/media/250618-AdmissionAdPostgraduate-1.0e4793d3.jpg",
    "revision": "0e4793d343286e4bf97d9b70753b3a76"
  },
  {
    "url": "static/media/ads1.1ea444e5.JPG",
    "revision": "1ea444e51adad5ab792ccc31d0eb264b"
  },
  {
    "url": "static/media/ads3.b5973dbf.JPG",
    "revision": "b5973dbffba39cd36c3a45ce8c399916"
  },
  {
    "url": "static/media/adsheight.274f0c9a.JPG",
    "revision": "274f0c9a01e825530f0f76c335596397"
  },
  {
    "url": "static/media/adsloading.4eae82b8.gif",
    "revision": "4eae82b88fc8274917f03dad4e851e4d"
  },
  {
    "url": "static/media/adsloading23.3775a0f3.gif",
    "revision": "3775a0f3b74f9c0427d4a7e3e627d8fd"
  },
  {
    "url": "static/media/animals.1638d0ad.JPG",
    "revision": "1638d0ade8716e311dc42d175744ab31"
  },
  {
    "url": "static/media/bike.fd6e7d33.JPG",
    "revision": "fd6e7d33b248d32ddd3cf37f7d8967c4"
  },
  {
    "url": "static/media/books.b06fbf4a.JPG",
    "revision": "b06fbf4a5482af81ea75f6a4df731d0b"
  },
  {
    "url": "static/media/car.7d0d664f.JPG",
    "revision": "7d0d664fef74262fcd5fcda2c0665554"
  },
  {
    "url": "static/media/furniture.7861ba3b.JPG",
    "revision": "7861ba3bd9c2c7e3855f5af14ed4d9c5"
  },
  {
    "url": "static/media/jobs.dec6cefb.JPG",
    "revision": "dec6cefb411061cd80825a9cbe855f46"
  },
  {
    "url": "static/media/mob.e800c409.JPG",
    "revision": "e800c4093e3d43d2417b46f64cb47fe1"
  },
  {
    "url": "static/media/postloader.716c8923.gif",
    "revision": "716c8923d475911a2d11558f4c04ad52"
  },
  {
    "url": "static/media/property1JPG.cc2244ef.JPG",
    "revision": "cc2244ef44cdce5d4dbb7fa96f92d90d"
  },
  {
    "url": "static/media/roboto-latin-100.987b8457.woff2",
    "revision": "987b84570ea69ee660455b8d5e91f5f1"
  },
  {
    "url": "static/media/roboto-latin-100.e9dbbe8a.woff",
    "revision": "e9dbbe8a693dd275c16d32feb101f1c1"
  },
  {
    "url": "static/media/roboto-latin-100italic.6232f43d.woff2",
    "revision": "6232f43d15b0e7a0bf0fe82e295bdd06"
  },
  {
    "url": "static/media/roboto-latin-100italic.d704bb3d.woff",
    "revision": "d704bb3d579b7d5e40880c75705c8a71"
  },
  {
    "url": "static/media/roboto-latin-300.55536c8e.woff2",
    "revision": "55536c8e9e9a532651e3cf374f290ea3"
  },
  {
    "url": "static/media/roboto-latin-300.a1471d1d.woff",
    "revision": "a1471d1d6431c893582a5f6a250db3f9"
  },
  {
    "url": "static/media/roboto-latin-300italic.210a7c78.woff",
    "revision": "210a7c781f5a354a0e4985656ab456d9"
  },
  {
    "url": "static/media/roboto-latin-300italic.d69924b9.woff2",
    "revision": "d69924b98acd849cdeba9fbff3f88ea6"
  },
  {
    "url": "static/media/roboto-latin-400.5d4aeb4e.woff2",
    "revision": "5d4aeb4e5f5ef754e307d7ffaef688bd"
  },
  {
    "url": "static/media/roboto-latin-400.bafb105b.woff",
    "revision": "bafb105baeb22d965c70fe52ba6b49d9"
  },
  {
    "url": "static/media/roboto-latin-400italic.9680d5a0.woff",
    "revision": "9680d5a0c32d2fd084e07bbc4c8b2923"
  },
  {
    "url": "static/media/roboto-latin-400italic.d8bcbe72.woff2",
    "revision": "d8bcbe724fd6f4ba44d0ee6a2675890f"
  },
  {
    "url": "static/media/roboto-latin-500.28546717.woff2",
    "revision": "285467176f7fe6bb6a9c6873b3dad2cc"
  },
  {
    "url": "static/media/roboto-latin-500.de8b7431.woff",
    "revision": "de8b7431b74642e830af4d4f4b513ec9"
  },
  {
    "url": "static/media/roboto-latin-500italic.510dec37.woff2",
    "revision": "510dec37fa69fba39593e01a469ee018"
  },
  {
    "url": "static/media/roboto-latin-500italic.ffcc050b.woff",
    "revision": "ffcc050b2d92d4b14a4fcb527ee0bcc8"
  },
  {
    "url": "static/media/roboto-latin-700.037d8304.woff2",
    "revision": "037d830416495def72b7881024c14b7b"
  },
  {
    "url": "static/media/roboto-latin-700.cf6613d1.woff",
    "revision": "cf6613d1adf490972c557a8e318e0868"
  },
  {
    "url": "static/media/roboto-latin-700italic.010c1aee.woff2",
    "revision": "010c1aeee3c6d1cbb1d5761d80353823"
  },
  {
    "url": "static/media/roboto-latin-700italic.846d1890.woff",
    "revision": "846d1890aee87fde5d8ced8eba360c3a"
  },
  {
    "url": "static/media/roboto-latin-900.19b7a0ad.woff2",
    "revision": "19b7a0adfdd4f808b53af7e2ce2ad4e5"
  },
  {
    "url": "static/media/roboto-latin-900.8c2ade50.woff",
    "revision": "8c2ade503b34e31430d6c98aa29a52a3"
  },
  {
    "url": "static/media/roboto-latin-900italic.7b770d6c.woff2",
    "revision": "7b770d6c53423deb1a8e49d3c9175184"
  },
  {
    "url": "static/media/roboto-latin-900italic.bc833e72.woff",
    "revision": "bc833e725c137257c2c42a789845d82f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, workbox.strategies.cacheFirst({ cacheName: "images", plugins: [new workbox.expiration.Plugin({"maxEntries":500,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ cacheName: "fonts", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/graph.facebook.com\/(.*)/, workbox.strategies.cacheFirst({ cacheName: "avatars", plugins: [] }), 'GET');
workbox.routing.registerRoute(/search/, workbox.strategies.networkFirst({ networkTimeoutSeconds: 10, cacheName: "api-cache", plugins: [] }), 'GET');
