// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };


  
// const firebaseConfig = {
//   apiKey: "AIzaSyA9Wj9A-LjCepL5fYwo9LItYZlkwrxATYo",
//   authDomain: "next-auth-e4361.firebaseapp.com",
//   projectId: "next-auth-e4361",
//   storageBucket: "next-auth-e4361.appspot.com",
//   messagingSenderId: "652237075745",
//   appId: "1:652237075745:web:ef7d4c77c3a4b2511aba60",
//   measurementId: "G-M4KNQ2P7CZ",
// };

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
