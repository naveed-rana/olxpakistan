// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
// importScripts('/__/firebase/5.0.0/firebase-app.js');
// importScripts('/__/firebase/5.0.0/firebase-messaging.js');
// importScripts('/__/firebase/init.js');

importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
   // Initialize Firebase
   var config = {
    apiKey: "AIzaSyDX8myqZhSBYg-DH13Cy4moZSnSh8Hxs6k",
    authDomain: "olx-clone-app.firebaseapp.com",
    databaseURL: "https://olx-clone-app.firebaseio.com",
    projectId: "olx-clone-app",
    storageBucket: "olx-clone-app.appspot.com",
    messagingSenderId: "318699316380"
  };
  firebase.initializeApp(config);

var messaging = firebase.messaging();
// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.setBackgroundMessageHandler` handler.
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  var notificationTitle = 'Background Message Title';
  var notificationOptions = {
    body: 'Background Message body.',
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// [END background_handler]
