import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import "firebase/auth";
import {getFirestore} from "@firebase/firestore";
import "firebase/firestore";
// import * as firebase from "firebase/app";
// import firebase from "firebase"; // Add this line to import the 'firebase' module

let firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const firestore = firebase.firestore();
// export const db = getFirestore(app);
export const db = getFirestore(app);
export {auth}
export default firebaseConfig;