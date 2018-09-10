module.exports = {
	"maximumFileSizeToCacheInBytes": 5000000,
	"globDirectory": "build/",
	"globPatterns": [
		"**/*.{png,json,ico,svg,js,html,css,jpg,JPG,gif,woff,woff2}"
	],
	"swDest": "build\\service-worker.js",
	"skipWaiting": true,
	"clientsClaim": true,
	"globIgnores": [
		"service-worker.js",
		"firebase-messaging-sw.js",
		"manifest.json",
		"asset-manifest.json"
	],
	"runtimeCaching": [
		{
			"urlPattern": /\.(?:png|jpg|jpeg|svg)$/,
			"handler": 'cacheFirst',
			"options": {
				"cacheName": 'images',
				"expiration": {
					"maxEntries": 500,
				},
			},
		},
		{
			"urlPattern": new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
			"handler": 'cacheFirst',
			"options": {
				"cacheName": 'fonts',
			},
		},
		{
			"urlPattern": new RegExp('^https://graph.facebook.com/(.*)'),
			"handler": 'cacheFirst',
			"options": {
				"cacheName": 'avatars',
			},
		},
		{
			"urlPattern": /search/,
			"handler": 'networkFirst',
			"options": {
				"networkTimeoutSeconds": 10,
				"cacheName": 'api-cache',
			},
		}
	],
};