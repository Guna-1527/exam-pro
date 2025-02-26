import { initializeApp } from "firebase/app";
import "firebase/auth"; // Importing Firebase Authentication
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDR92yhKgU32cT4ukltjncoTbHq48lmZNU",
  authDomain: "exam-pro-90d94.firebaseapp.com",
  projectId: "exam-pro-90d94",
  storageBucket: "exam-pro-90d94.firebasestorage.app",
  messagingSenderId: "40535844746",
  appId: "1:40535844746:web:f92ac812f47ee99aa3ca73",
  measurementId: "G-TJ45K66J8K",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
