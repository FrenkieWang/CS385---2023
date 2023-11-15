// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import { signInWithEmailAndPassword } from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

// you'll need to obtain your own firebase config. 
};

let firebaseApp;
try {
  firebaseApp = getApp();
} catch (e) {
  firebaseApp = initializeApp(firebaseConfig);
}

const db = getFirestore(firebaseApp, {});
export { db, firebaseApp };
