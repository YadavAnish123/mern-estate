// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_Firebase_Api_Key,
  authDomain: "realstateproject-7c681.firebaseapp.com",
  projectId: "realstateproject-7c681",
  storageBucket: "realstateproject-7c681.appspot.com",
  messagingSenderId: "849760139869",
  appId: "1:849760139869:web:f6e86517dbec8904b7abb4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);