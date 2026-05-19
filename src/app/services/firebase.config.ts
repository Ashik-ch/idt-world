import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmULI2wnRaaQyrb4hwC9RUec_s0m1DfIw",
  authDomain: "idt-world.firebaseapp.com",
  projectId: "idt-world",
  storageBucket: "idt-world.firebasestorage.app",
  messagingSenderId: "289294003274",
  appId: "1:289294003274:web:b03aa8d4197b5bee504ab3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
