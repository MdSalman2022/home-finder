// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxn1BZ3gBpxUQpL2E_F4X1en7XqxCdfLI",
  authDomain: "homefinder-bd.firebaseapp.com",
  projectId: "homefinder-bd",
  storageBucket: "homefinder-bd.appspot.com",
  messagingSenderId: "234163467352",
  appId: "1:234163467352:web:48cc57e89e8d02b4e0862d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
