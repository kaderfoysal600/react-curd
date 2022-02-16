import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCNs9bAgJZVupudD0E-6_7Zan3y5vihUoA",
    authDomain: "react-curd-946c3.firebaseapp.com",
    projectId: "react-curd-946c3",
    storageBucket: "react-curd-946c3.appspot.com",
    messagingSenderId: "271830604961",
    appId: "1:271830604961:web:01c43a0793211d5752a4e0",
    measurementId: "G-6KHT610460"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)