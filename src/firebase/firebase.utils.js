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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

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
            console.log('Error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;