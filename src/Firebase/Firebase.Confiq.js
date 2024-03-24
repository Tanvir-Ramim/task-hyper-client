// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6AfqWZvAaxlXvmyf7tBK37X6pXBFurVM",
  authDomain: "task-hyper.firebaseapp.com",
  projectId: "task-hyper",
  storageBucket: "task-hyper.appspot.com",
  messagingSenderId: "734391025172",
  appId: "1:734391025172:web:ad66797121513925f57101"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);