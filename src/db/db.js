import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCg03JYylMFr9VajHSJybmqEPerGcHL_Vs",
    authDomain: "ecommerce-nieto.firebaseapp.com",
    projectId: "ecommerce-nieto",
    storageBucket: "ecommerce-nieto.appspot.com",
    messagingSenderId: "617111025960",
    appId: "1:617111025960:web:0e453d6fe53fa26b80b81d"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db