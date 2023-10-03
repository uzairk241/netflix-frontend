import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSH7faRIYOK7kjfYyEJnfn4hsDODBywvw",
  authDomain: "netflix-clone-5d8bf.firebaseapp.com",
  projectId: "netflix-clone-5d8bf",
  storageBucket: "netflix-clone-5d8bf.appspot.com",
  messagingSenderId: "913523040224",
  appId: "1:913523040224:web:9324257d3c4b64b5859585",
  measurementId: "G-TTNHYV16ZK"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
