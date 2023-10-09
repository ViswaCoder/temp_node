importScripts(
  "https://www.gstatic.com/firebasejs/9.9.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.9.1/firebase-messaging-compat.js"
);
firebase.initializeApp({
  apiKey: "AIzaSyAz4OHjpJZ0wogD_9Zmeynf3IPYNsRlAn4",
  authDomain: "sample-e5a67.firebaseapp.com",
  projectId: "sample-e5a67",
  storageBucket: "sample-e5a67.appspot.com",
  messagingSenderId: "800654908366",
  appId: "1:800654908366:web:2307d4a1e735e65958699f",
});
const messaging = firebase.messaging();
