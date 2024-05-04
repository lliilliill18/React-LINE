import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD_qHk1r-BPKOWFJKxixvWSWoK8jpBdnpg",
  authDomain: "react-line-22064.firebaseapp.com",
  projectId: "react-line-22064",
  storageBucket: "react-line-22064.appspot.com",
  messagingSenderId: "1047497793319",
  appId: "1:1047497793319:web:0ef359968b1ac3048a5302"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};