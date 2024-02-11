// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp2kugv6cexA_2efc8tSgD1yYvfpzVQuk",
  authDomain: "youknowwhat-3d983.firebaseapp.com",
  projectId: "youknowwhat-3d983",
  storageBucket: "youknowwhat-3d983.appspot.com",
  messagingSenderId: "347215398887",
  appId: "1:347215398887:web:65a3c0f00667792e5f5f42",
  measurementId: "G-7GB27R9JFE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
