// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEqIrgahPNJaX6tOtt5CBXW0wzfl7U3Zw",
  authDomain: "building-cleaning-assignments.firebaseapp.com",
  projectId: "building-cleaning-assignments",
  storageBucket: "building-cleaning-assignments.appspot.com",
  messagingSenderId: "793342623902",
  appId: "1:793342623902:web:64999d9aef772d6c03bb8f",
  // databaseURL: "https://building-cleaning-assignments-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

