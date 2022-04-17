import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyrp0YIvVi9mi7zI257y8OhRH4Kgd1_8s",
  authDomain: "personalproject-2.firebaseapp.com",
  databaseURL: "https://personalproject-2-default-rtdb.firebaseio.com",
  projectId: "personalproject-2",
  storageBucket: "personalproject-2.appspot.com",
  messagingSenderId: "1097579966006",
  appId: "1:1097579966006:web:d0191a3f78fbf8d0047297",
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
