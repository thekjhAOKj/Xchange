// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPlmgxPlq8kISy83_R3t9Y3b_m7YOWtj8",
  authDomain: "x-change-51493.firebaseapp.com",
  projectId: "x-change-51493",
  storageBucket: "x-change-51493.firebasestorage.app",
  messagingSenderId: "931148104798",
  appId: "1:931148104798:web:bdb61436f285e68a92a0cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }
export default app