import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIrwbOta2DH8LpjqqfPAYwv39rRR8TZUc",
  authDomain: "dailyquest-3db4e.firebaseapp.com",
  projectId: "dailyquest-3db4e",
  storageBucket: "dailyquest-3db4e.firebasestorage.app",
  messagingSenderId: "1086433180064",
  appId: "1:1086433180064:web:6c85d4798bc33217c04cc5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}


