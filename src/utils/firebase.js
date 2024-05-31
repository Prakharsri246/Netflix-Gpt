// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzKmyRjtgJKB9QiBKIhczQ8A_ucfw1lPk",
  authDomain: "netflixgpt-fe99e.firebaseapp.com",
  projectId: "netflixgpt-fe99e",
  storageBucket: "netflixgpt-fe99e.appspot.com",
  messagingSenderId: "648288823370",
  appId: "1:648288823370:web:4fb80e51c7fc12f3f09eb3",
  measurementId: "G-E2YGJGD619"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//authentication
export const auth = getAuth();