import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyA_ZByp0x0odos-efknrt8soallBc7ESTI",
    authDomain: "wily-a3fcd.firebaseapp.com",
    databaseURL: "https://wily-a3fcd.firebaseio.com",
    projectId: "wily-a3fcd",
    storageBucket: "wily-a3fcd.appspot.com",
    messagingSenderId: "248165790084",
    appId: "1:248165790084:web:998e7f97890ba066236dd1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()