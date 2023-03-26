// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "net-flix-clone-9d1e0.firebaseapp.com",
  projectId: "net-flix-clone-9d1e0",
  storageBucket: "net-flix-clone-9d1e0.appspot.com",
  messagingSenderId: "763034514592",
  appId: "1:763034514592:web:d51b28df8c73764eccc5c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
