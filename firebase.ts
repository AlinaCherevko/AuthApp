import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const firebaseConfig = {
  apiKey: "AIzaSyCAOWF93YX6mHoulFw6gQvNJatq5PwVmsc",
  authDomain: "authapp-efabb.firebaseapp.com",
  projectId: "authapp-efabb",
  storageBucket: "authapp-efabb.appspot.com",
  messagingSenderId: "934477509066",
  appId: "1:934477509066:web:50e473d584faa7ea1c5f33",
};

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BASKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

export const app = initializeApp(firebaseConfig);
//export const provider = new GoogleAuthProvider();
