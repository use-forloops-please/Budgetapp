import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC0tAIt5CURQUlPy4n1pD-4rL3UwMCPl7Q",
    authDomain: "budget-app-629bc.firebaseapp.com",
    projectId: "budget-app-629bc",
    storageBucket: "budget-app-629bc.appspot.com",
    messagingSenderId: "261587990553",
    appId: "1:261587990553:web:523aa2adf6bf819e2ad288",
    measurementId: "G-J040HVDMEV"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
