// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDfWqvbaHa6Aw7_WTXF-EXPAms8MF-n_I",
    authDomain: "react-curso-55a7d.firebaseapp.com",
    projectId: "react-curso-55a7d",
    storageBucket: "react-curso-55a7d.appspot.com",
    messagingSenderId: "383771754856",
    appId: "1:383771754856:web:448d06569ef6f5bed116dd"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FireBaseDB = getFirestore(FirebaseApp);