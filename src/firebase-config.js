import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCC4y0vGOlLwzHorO4MdDXXsE_oCgogsWI",
    authDomain: "delfos-ds-core-invoice.firebaseapp.com",
    projectId: "delfos-ds-core-invoice",
    storageBucket: "delfos-ds-core-invoice.appspot.com",
    messagingSenderId: "317168919444",
    appId: "1:317168919444:web:96c43cf02477e41f092581",
    measurementId: "G-N1X2L7ZWXG"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);