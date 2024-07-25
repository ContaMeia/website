// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirebase } from "firebase/firestore"
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBjQEfM91VaQEqv0D64UdFjVY_hmi5DxhE",
  authDomain: "contameia.firebaseapp.com",
  projectId: "contameia",
  storageBucket: "contameia.appspot.com",
  messagingSenderId: "774912468526",
  appId: "1:774912468526:web:3f827da59c584948a6a1bf",
  measurementId: "G-7ZYPLLPZXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirebase(app);
const auth = getAuth(app);

export {db, auth};