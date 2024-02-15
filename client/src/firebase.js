// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3042a.firebaseapp.com",
  projectId: "mern-estate-3042a",
  storageBucket: "mern-estate-3042a.appspot.com",
  messagingSenderId: "1072766200524",
  appId: "1:1072766200524:web:bf7da84f205f111445f069",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
