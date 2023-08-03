// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk6LA36-ONRLMLqpnLTGz_cZe4f2PhG1c",
  authDomain: "shubham-482cf.firebaseapp.com",
  projectId: "shubham-482cf",
  storageBucket: "shubham-482cf.appspot.com",
  messagingSenderId: "900582859163",
  appId: "1:900582859163:web:28e58184756b92a8e4413e",
  measurementId: "G-QY8W7CDZ5K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);