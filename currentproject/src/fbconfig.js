// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";

//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import { signInWithEmailAndPassword } from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEuBKX4iY3T4CEGmxAALzGl4AMLyOC2GI",
  authDomain: "pallet2023-c5df9.firebaseapp.com",
  projectId: "pallet2023-c5df9",
  storageBucket: "pallet2023-c5df9.appspot.com",
  messagingSenderId: "925087154703",
  appId: "1:925087154703:web:50620860e294f5e7e2997a",
  measurementId: "G-DQSMDEZGW6"
// you'll need to obtain your own firebase config. 
};

let firebaseApp;
try {
  firebaseApp = getApp();
} catch (e) {
  firebaseApp = initializeApp(firebaseConfig);
}

// const db = getFirestore(firebaseApp, {});
const db = initializeFirestore(firebaseApp,  
  {
      experimentalForceLongPolling : true
  });
export { db, firebaseApp };
