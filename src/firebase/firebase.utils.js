import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDqcXsA7OuBIqv8iqHgVS7PPaZOhmZSSNs",
    authDomain: "crwn-db-42d41.firebaseapp.com",
    databaseURL: "https://crwn-db-42d41.firebaseio.com",
    projectId: "crwn-db-42d41",
    storageBucket: "crwn-db-42d41.appspot.com",
    messagingSenderId: "1077863907198",
    appId: "1:1077863907198:web:73dc8ec6e68ff21edc7d2f"
  };

firebase.initializeApp(config);
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;