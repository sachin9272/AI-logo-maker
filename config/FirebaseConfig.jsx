// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-logo-maker-87a2c.firebaseapp.com",
  projectId: "ai-logo-maker-87a2c",
  storageBucket: "ai-logo-maker-87a2c.firebasestorage.app",
  messagingSenderId: "160256365820",
  appId: "1:160256365820:web:a0ce2e3021f7984d87f379",
  measurementId: "G-QFF65MRVR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);