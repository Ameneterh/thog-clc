// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "clc-houseofglory.firebaseapp.com",
  projectId: "clc-houseofglory",
  storageBucket: "clc-houseofglory.appspot.com",
  messagingSenderId: "714446001687",
  appId: "1:714446001687:web:3be9b4819bde2bb1aaee52",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
