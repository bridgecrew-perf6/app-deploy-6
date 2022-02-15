import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChDN-faZIW3QsDwb-ISLXQshYQZTL_Exw",
    authDomain: "personalproyect-337100.firebaseapp.com",
    projectId: "personalproyect-337100",
    storageBucket: "personalproyect-337100.appspot.com",
    messagingSenderId: "169502430259",
    appId: "1:169502430259:web:857894dfb6afb355f5ff46",
    measurementId: "G-H3HTNFFN0P"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);