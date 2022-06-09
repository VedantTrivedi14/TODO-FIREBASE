import { initializeApp } from "firebase/app";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCBrhgNjbAyiSocRPdGoHEYRBtpFOmMphg",
  authDomain: "firetodo-a8ac7.firebaseapp.com",
  projectId: "firetodo-a8ac7",
  storageBucket: "firetodo-a8ac7.appspot.com",
  messagingSenderId: "1086250477389",
  appId: "1:1086250477389:web:714560b18a4c3c4f30f904",
  measurementId: "G-CVNEQTXLES"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

let currentUser = undefined;
onAuthStateChanged(auth, (user) => {
        currentUser = user;
  });

  export {
      auth,
      db
  }