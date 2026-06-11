import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyBZW6WY2gRJYi9DbduIpbeFgl82mzLPdh0",
    authDomain: "zeekr-app.firebaseapp.com",
    projectId: "zeekr-app",
    storageBucket: "zeekr-app.firebasestorage.app",
    messagingSenderId: "674769672647",
    appId: "1:674769672647:web:b66c3b114d8ca66df2e1e2",
    measurementId: "G-WR2JWX2KW8"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
