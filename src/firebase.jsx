import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC3lAa3PcE_oX1G22Y6T3gLa3xqAIwZP4w",
    authDomain: "barcode-15ae2.firebaseapp.com",
    projectId: "barcode-15ae2",
    storageBucket: "barcode-15ae2.appspot.com",
    messagingSenderId: "385994237565",
    appId: "1:385994237565:web:174d8063454d471a807314"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
