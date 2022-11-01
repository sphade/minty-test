// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { enableIndexedDbPersistence } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDURUZ3xyKjlM2AKci8RlPqCF5lq6ceTbM",
  authDomain: "test-a3e75.firebaseapp.com",
  projectId: "test-a3e75",
  storageBucket: "test-a3e75.appspot.com",
  messagingSenderId: "843097416416",
  appId: "1:843097416416:web:a8a233552465d860fba685",
  measurementId: "G-STPZ9M2QXT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);
enableIndexedDbPersistence(db)