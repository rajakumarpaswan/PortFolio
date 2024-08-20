
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA1UemSPKuNiHu52zWT04IY7-E0MTX2WlU",
  authDomain: "portfolio-34665.firebaseapp.com",
  projectId: "portfolio-34665",
  storageBucket: "portfolio-34665.appspot.com",
  messagingSenderId: "671494597114",
  appId: "1:671494597114:web:8d6edc41df87411eee9c43",
  measurementId: "G-RE1NNB8LH1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
