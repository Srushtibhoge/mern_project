// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-fadaf.firebaseapp.com",
  projectId: "mern-blog-fadaf",
  storageBucket: "mern-blog-fadaf.appspot.com",
  messagingSenderId: "910886724880",
  appId: "1:910886724880:web:d75729a84dfdab2b777195"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);