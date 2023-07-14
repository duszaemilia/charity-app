// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTMDLbVoQM61kbo2nPHosvTx8ajrthqcc",
    authDomain: "charity-app-eae5e.firebaseapp.com",
    projectId: "charity-app-eae5e",
    storageBucket: "charity-app-eae5e.appspot.com",
    messagingSenderId: "164048251172",
    appId: "1:164048251172:web:51d15d913be4941eeeabb1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);