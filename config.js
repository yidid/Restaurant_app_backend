const firebase =require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyBBGeaZ7I3azKV0t0SJ-pA28iu_Q9IPzwE",
    authDomain: "restaurant-app-f996e.firebaseapp.com",
    projectId: "restaurant-app-f996e",
    storageBucket: "restaurant-app-f996e.appspot.com",
    messagingSenderId: "840646776312",
    appId: "1:840646776312:web:d2a8972b6798d0128fb20d",
    measurementId: "G-XE0VE4DHRD"
  };
firebase.initializeApp (firebaseConfig);
const db=firebase.firestore();
const Restaurant=db.collection("Restaurant"); 
module.exports = router;


