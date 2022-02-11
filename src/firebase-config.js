import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDtiF-MUX3HEffjKd1dmx0yI2fN8QVylK8",
    authDomain: "skydropx-341017.firebaseapp.com",
    projectId: "skydropx-341017",
    storageBucket: "skydropx-341017.appspot.com",
    messagingSenderId: "116434497431",
    appId: "1:116434497431:web:29751f06cab7e9d6b19ed2"
  };

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);