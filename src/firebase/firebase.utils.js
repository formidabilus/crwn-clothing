import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBpaC8rk5AAzc63gymBpn6v2LSqs8qJ2Xk",

  authDomain: "crwn-firedb.firebaseapp.com",

  projectId: "crwn-firedb",

  storageBucket: "crwn-firedb.appspot.com",

  messagingSenderId: "363660368233",

  appId: "1:363660368233:web:b21cb48dca7dd50d91c5f8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
