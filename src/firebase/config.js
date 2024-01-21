// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
import { getEnvironments } from "../helpers/getEnvironments";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
    VITE_APIKEY,
    VITE_AUTHDOMAIN,
    VITE_PROJECTID,
    VITE_STORAGEBUCKET,
    VITE_MESSAGINGSENDERID,
    VITE_APPID,
    VITE_MEASUREMENTID,

} = getEnvironments();

// Your web app's Firebase configuration
// const firebaseConfig = {
// apiKey: "AIzaSyDDfWqvbaHa6Aw7_WTXF-EXPAms8MF-n_I",
// authDomain: "react-curso-55a7d.firebaseapp.com",
// projectId: "react-curso-55a7d",
// storageBucket: "react-curso-55a7d.appspot.com",
// messagingSenderId: "383771754856",
// appId: "1:383771754856:web:448d06569ef6f5bed116dd"
// };


// Testing
// const firebaseConfig = {
//     apiKey: "AIzaSyAlZDpy7AcGSr5-lrfZ5VMI7zM0fgRYDlY",
//     authDomain: "testing-react-curso-64445.firebaseapp.com",
//     projectId: "testing-react-curso-64445",
//     storageBucket: "testing-react-curso-64445.appspot.com",
//     messagingSenderId: "474665408543",
//     appId: "1:474665408543:web:29afba49627001d85ddd2a",
//     measurementId: "G-M88R5DC44V"
// };

const firebaseConfig = {
    apiKey: VITE_APIKEY,
    authDomain: VITE_AUTHDOMAIN,
    projectId: VITE_PROJECTID,
    storageBucket: VITE_STORAGEBUCKET,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID,
    measurementId: VITE_MEASUREMENTID
};

console.log(firebaseConfig)

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FireBaseDB = getFirestore(FirebaseApp);