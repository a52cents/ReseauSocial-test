import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";

 const firebaseConfig = {
    apiKey: "AIzaSyAUKOZmu951oeUZPY0-hO8htZohtKQ7pP0",
    authDomain: "socialapp-92794.firebaseapp.com",
    projectId: "socialapp-92794",
    storageBucket: "socialapp-92794.appspot.com",
    messagingSenderId: "352106011924",
    appId: "1:352106011924:web:25d8f80558b4ccb2b23601"
  };

  export const FIREBASE_APP = initializeApp(firebaseConfig);
  export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
