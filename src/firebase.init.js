// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrh5pPLPFRsAJ0Jq6o6iNXDtwZoRTGRc0",
  authDomain: "doctors-portal-e396c.firebaseapp.com",
  projectId: "doctors-portal-e396c",
  storageBucket: "doctors-portal-e396c.appspot.com",
  messagingSenderId: "68061610733",
  appId: "1:68061610733:web:5a68f94a7aa48717bf82e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; 
