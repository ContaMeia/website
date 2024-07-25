// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };