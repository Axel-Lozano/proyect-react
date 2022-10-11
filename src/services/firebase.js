// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "react-axel.firebaseapp.com",
    projectId: "react-axel",
    storageBucket: "react-axel.appspot.com",
    messagingSenderId: "982764013595",
    appId: "1:982764013595:web:73cc3aceaf8f715cfa10be",
    measurementId: "G-NM684RH5G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;