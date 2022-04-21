// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnpInqzsCKDLUHVSG-jxk3aK7eP7j9CBw",
  authDomain: "comidapp2.firebaseapp.com",
  projectId: "comidapp2",
  storageBucket: "comidapp2.appspot.com",
  messagingSenderId: "640869735637",
  appId: "1:640869735637:web:ceae0d2d5bd722a671565c"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;