const firebase = require('firebase');

firebase.initializeApp({
  apiKey: "AIzaSyCQ0ZONwFWVL-SG2sVQoxSOWw2eLf94t50",
  authDomain: "pta-to-do-list-897d6.firebaseapp.com",
  databaseURL: "https://pta-to-do-list-897d6.firebaseio.com",
  projectId: "pta-to-do-list-897d6",
  storageBucket: "pta-to-do-list-897d6.appspot.com",
  messagingSenderId: "165462703877",
  appId: "1:165462703877:web:4754ef75bf17f48c"
});

module.exports = firebase.database();