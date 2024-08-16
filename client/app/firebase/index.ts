import { initializeApp } from "firebase/app";
import { envVariables } from "../config/envVariables";

const firebaseConfig = {
  apiKey: envVariables.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: envVariables.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: envVariables.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: envVariables.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envVariables.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: envVariables.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
