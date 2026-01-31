import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxKET9vhjrVCZzypK7_bwI2GCNVnePby0",
  authDomain: "hidroponik-self.firebaseapp.com",
  projectId: "hidroponik-self",
  storageBucket: "hidroponik-self.firebasestorage.app",
  messagingSenderId: "853066244036",
  appId: "1:853066244036:web:8b884a8e35a1e040bace91",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
