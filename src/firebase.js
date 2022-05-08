import { initializeApp } from "firebase/app"
import "firebase/auth"
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore" 


const firebaseConfig = {
  apiKey: "AIzaSyBBOaErgf1SN0R8OdJYNMb-uzitfmI--Xg",
  authDomain: "cybernetic-muse-316710.firebaseapp.com",
  projectId: "cybernetic-muse-316710",
  storageBucket: "cybernetic-muse-316710.appspot.com",
  messagingSenderId: "666788839671",
  appId: "1:666788839671:web:1c5eabf8e32cc2d58153f2"
};

  const app = initializeApp(firebaseConfig)
    export const auth = getAuth(app)
    export const db = getFirestore(app)
    export const provider = new GoogleAuthProvider()