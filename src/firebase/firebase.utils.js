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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;