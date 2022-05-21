// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw-o87Pr7U4IRTQf0jPqJnTmwAAjim9Ms",
  authDomain: "delta-car-parts-manufacturer.firebaseapp.com",
  projectId: "delta-car-parts-manufacturer",
  storageBucket: "delta-car-parts-manufacturer.appspot.com",
  messagingSenderId: "1021724543791",
  appId: "1:1021724543791:web:a5192104eefe3a5257efda"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;