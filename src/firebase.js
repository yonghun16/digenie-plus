// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxmvL3P9igpk6jCwXkb_uiy-MUmK1Jh2E",
  authDomain: "react-digeni-plus.firebaseapp.com",
  projectId: "react-digeni-plus",
  storageBucket: "react-digeni-plus.firebasestorage.app",
  messagingSenderId: "104235737973",
  appId: "1:104235737973:web:28945447a97e7af989693c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
