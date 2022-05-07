// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2YkPnrBvjYbxHLy8sTx5iTLZhdcfRGzk",
    authDomain: "clone-4fb5c.firebaseapp.com",
    projectId: "clone-4fb5c",
    storageBucket: "clone-4fb5c.appspot.com",
    messagingSenderId: "544717585972",
    appId: "1:544717585972:web:21ead3d85a4597aec15461"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider }