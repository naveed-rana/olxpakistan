
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
  // Retrieve Firebase Messaging object.
var messaging = firebase.messaging();
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('service-worker.js');
//     // window.addEventListener('load', () => {
//     // });
// }
messaging.onMessage(function(payload) {
  console.log('Message received. ', payload);
});


messaging.requestPermission().then(function() {
    console.log('Notification permission granted.');
    // TODO(developer): Retrieve an Instance ID token for use with FCM.
    // ...
    return messaging.getToken();
  }).then((token) => {
    // Simple ajax call to send user token to server for saving
    localStorage.setItem('token',token)
    console.log('index.js ',token)

  }).catch(function(err) {
    console.log('Unable to get permission to notify.', err);
  });

 messaging.onTokenRefresh(function() {
    messaging.getToken().then(function(refreshedToken) {
      console.log('Token refreshed.');
      localStorage.setItem('token',refreshedToken)
    }).catch(function(err) {
      console.log('Unable to retrieve refreshed token ', err);
      showToken('Unable to retrieve refreshed token ', err);
    });
  });