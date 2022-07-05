// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPJRwwTxYWsn7EQ-Vyj3pKU3Dv4AUYBSc",
    authDomain: "email-password-auth-f6776.firebaseapp.com",
    projectId: "email-password-auth-f6776",
    storageBucket: "email-password-auth-f6776.appspot.com",
    messagingSenderId: "741283321639",
    appId: "1:741283321639:web:14f9aeebda1decb3977b02",
    measurementId: "G-FHL83JV8V5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;