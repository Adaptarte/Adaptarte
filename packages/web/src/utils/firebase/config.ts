import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyB5St1PuZdgrynQse3Ml-paeggxbu1etA8",
  appId: "1:288895389085:web:eba5799af46fa579617374",
  authDomain: "adaptarte-8026d.firebaseapp.com",
  measurementId: "G-YPKHQHFP4L",
  messagingSenderId: "288895389085",
  projectId: "adaptarte-8026d",
  storageBucket: "adaptarte-8026d.appspot.com",
};

const app = initializeApp(config);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
