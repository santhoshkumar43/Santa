// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVFbt0352-1EXNWIPH7Q_LEe8iP5qfGYo",
  authDomain: "listedassign.firebaseapp.com",
  projectId: "listedassign",
  storageBucket: "listedassign.appspot.com",
  messagingSenderId: "895860130021",
  appId: "1:895860130021:web:407985ca56bddd373d140c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();