// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage} from "firebase/storage";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiYd5rusD1PGCDxOkYdqpLBaCjra5DR7o",
    authDomain: "turno-f7e41.firebaseapp.com",
    projectId: "turno-f7e41",
    storageBucket: "turno-f7e41.appspot.com",
    messagingSenderId: "691357539203",
    appId: "1:691357539203:web:fca7dbcbb806d28c2af4b6",
    measurementId: "G-XHFYW9QXX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth()

export {auth}
export {db}
export const storage = getStorage(app)