// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg44ikqBmL5OGJkqUanijTLsRHIlojuOs",
  authDomain: "calltheactioncomapp.firebaseapp.com",
  databaseURL: "https://calltheactioncomapp-default-rtdb.firebaseio.com",
  projectId: "calltheactioncomapp",
  storageBucket: "calltheactioncomapp.firebasestorage.app",
  messagingSenderId: "856527268479",
  appId: "1:856527268479:web:5905080244ad7d3d58ed4a",
  measurementId: "G-637EJ2J0K3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);