import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA3H6aRX0YiLpgOIrOMRPgVbWDiQsLhH9o",
    authDomain: "crown-clothing-db-3f68d.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-3f68d.firebaseio.com",
    projectId: "crown-clothing-db-3f68d",
    storageBucket: "",
    messagingSenderId: "357131090702",
    appId: "1:357131090702:web:1a88b12dc6ebf71f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;