// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig'; // Your Firebase configuration file

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQcWrT1Y-H5me4udPiPlv-nwt3MPBg3g8",
  authDomain: "csportfolio-7c3c2.firebaseapp.com",
  projectId: "csportfolio-7c3c2",
  storageBucket: "csportfolio-7c3c2.appspot.com",
  messagingSenderId: "154860507097",
  appId: "1:154860507097:web:211b9289f9c3150f28d3c8",
  measurementId: "G-DDH7GLYJ6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);