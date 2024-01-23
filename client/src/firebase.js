// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3d1d6.firebaseapp.com",
  projectId: "mern-blog-3d1d6",
  storageBucket: "mern-blog-3d1d6.appspot.com",
  messagingSenderId: "66073703627",
  appId: "1:66073703627:web:a1539d64e070a5619ed74e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
