import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBS-TZT-gVuwLU3j0I7A_88i_CeKZKv2kM",
    authDomain: "react-basic-c4de5.firebaseapp.com",
    projectId: "react-basic-c4de5",
    storageBucket: "react-basic-c4de5.appspot.com",
    messagingSenderId: "776986073183",
    appId: "1:776986073183:web:7a6e3e6f8358756d1b63ea",
    measurementId: "G-6P8CYNGLTL"
};

initializeApp(firebaseConfig);
export const db = getFirestore();