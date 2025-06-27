import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLBDVCdX7GhsLuedUlRJqoRD1vamNlnlA",
    authDomain: "neocode-6e769.firebaseapp.com",
    projectId: "neocode-6e769",
    storageBucket: "neocode-6e769.firebasestorage.app",
    messagingSenderId: "69193222655",
    appId: "1:69193222655:web:b7c2f04ff5b2ea5875ffca"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
