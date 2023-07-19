// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBsq8oTmDdvzJu8Rps1UVv2gBOnelJ1Y4",
  authDomain: "ottoblog-b625c.firebaseapp.com",
  projectId: "ottoblog-b625c",
  storageBucket: "ottoblog-b625c.appspot.com",
  messagingSenderId: "405220333041",
  appId: "1:405220333041:web:3cfa62a964465d2e706050"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}