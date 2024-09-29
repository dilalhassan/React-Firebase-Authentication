
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCX6pxzsX1IFBXR5tBbzNti4xketTZrsRY",
  authDomain: "react-firebase-authentic-4cb17.firebaseapp.com",
  projectId: "react-firebase-authentic-4cb17",
  storageBucket: "react-firebase-authentic-4cb17.appspot.com",
  messagingSenderId: "1014877798568",
  appId: "1:1014877798568:web:10d46354357c151fd1c29d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)