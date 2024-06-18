// firebaseConfig.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA98nr6vTov2WqePz4Ueq5-ED9Bh6pBikM",
  authDomain: "plantify-50b4e.firebaseapp.com",
  databaseURL: "https://plantify-50b4e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "plantify-50b4e",
  storageBucket: "plantify-50b4e.appspot.com",
  messagingSenderId: "757675160517",
  appId: "1:757675160517:android:0ffc0ab946c00e865811ac"
};

const firebaseApp = firebase.apps.length === 0 ? initializeApp(firebaseConfig) : null;

export default firebaseApp;
