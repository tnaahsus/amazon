import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyClQ6tzFef2DRZ0hd51TlF5Bv7bkCCJt_s",
  authDomain: "clone-4a217.firebaseapp.com",
  projectId: "clone-4a217",
  storageBucket: "clone-4a217.appspot.com",
  messagingSenderId: "1038546947378",
  appId: "1=1038546947378=web=ad7d71091179e4d4749b2b",
  measurementId: "G-K0PWFSYZ0D"
};
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)
const auth =  getAuth(firebaseApp);

export { db, auth };