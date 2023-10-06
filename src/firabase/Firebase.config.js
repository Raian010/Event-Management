// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARPEYHPiPhWLe4Fuub8aE7wokYOcRcdP0",
  authDomain: "assignment-react-auth.firebaseapp.com",
  projectId: "assignment-react-auth",
  storageBucket: "assignment-react-auth.appspot.com",
  messagingSenderId: "92419159774",
  appId: "1:92419159774:web:c37d076d16e87818f6b44f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;