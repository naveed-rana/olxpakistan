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
    "revision": "c2c86b11c5cdee9c602cefb80d529460"
  },
  {
    "url": "static/css/main.42d112d6.css",
    "revision": "7e1b41a25c2783088453a0b51eb69b2b"
  },
  {
    "url": "static/js/main.a5def8b6.js",
    "revision": "7096656680f70f33ca8ffe1f292fd510"
  },
  {
    "url": "static/media/250618-AdmissionAdPostgraduate-1.0e4793d3.jpg",
    "revision": "0e4793d343286e4bf97d9b70753b3a76"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, workbox.strategies.cacheFirst({ cacheName: "images", plugins: [new workbox.expiration.Plugin({"maxEntries":500,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ cacheName: "fonts", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/graph.facebook.com\/(.*)/, workbox.strategies.cacheFirst({ cacheName: "avatars", plugins: [] }), 'GET');
workbox.routing.registerRoute(/search/, workbox.strategies.networkFirst({ networkTimeoutSeconds: 10, cacheName: "api-cache", plugins: [] }), 'GET');
