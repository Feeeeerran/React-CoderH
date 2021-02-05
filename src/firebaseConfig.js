// Archivo adicional par ano tener que repetir todo el codigo cada vez que necesito consumir de firebase

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAcU0UZINuUOvi3sgcw5iAl_gV6ySYfG5c",
    authDomain: "coder-ecommerce-9c694.firebaseapp.com",
    projectId: "coder-ecommerce-9c694",
    storageBucket: "coder-ecommerce-9c694.appspot.com",
    messagingSenderId: "228801063770",
    appId: "1:228801063770:web:4acafff3954cbb0120a163"
};


const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore()
