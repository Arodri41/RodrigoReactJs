import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFdZd4T-uYTDQ8UFLk8NN8DK-W0ju9LUQ",
  authDomain: "rodrigoreact-5d681.firebaseapp.com",
  projectId: "rodrigoreact-5d681",
  storageBucket: "rodrigoreact-5d681.appspot.com",
  messagingSenderId: "108749435444",
  appId: "1:108749435444:web:ce8f9dc9669ec71f4e1061",
  measurementId: "G-VGZTT1335N"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

