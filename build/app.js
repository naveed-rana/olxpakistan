import {toast} from 'react-toastify';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCu5FC9GkzqX7jaIzP_XOxqMLlpJxULFIw",
    authDomain: "reactfirebase-aac85.firebaseapp.com",
    databaseURL: "https://reactfirebase-aac85.firebaseio.com",
    projectId: "reactfirebase-aac85",
    storageBucket: "reactfirebase-aac85.appspot.com",
    messagingSenderId: "571909973565"
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
  toast.success(`New Message \n ${payload.notification
    .body}`);
});


messaging.requestPermission().then(function() {
    console.log('Notification permission granted.');
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