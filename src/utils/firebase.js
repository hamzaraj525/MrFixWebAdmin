import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAJrbegTEJD7oTvbGUGsAMmqSVQUtdjh_k",
  authDomain: "mrfix-55775.firebaseapp.com",
  databaseURL: "https://mrfix-55775-default-rtdb.firebaseio.com",
  projectId: "mrfix-55775",
  storageBucket: "mrfix-55775.appspot.com",
  messagingSenderId: "396546444157",
  appId: "1:396546444157:web:30cdfa36c894d765d29a14",
  measurementId: "G-QZ6VVNXPGG",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
