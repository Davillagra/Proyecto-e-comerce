// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd_grtMCVUdoFovcObedJXKe-EHSm19pE",
  authDomain: "proyecto-react-js-b7ed2.firebaseapp.com",
  projectId: "proyecto-react-js-b7ed2",
  storageBucket: "proyecto-react-js-b7ed2.appspot.com",
  messagingSenderId: "718314571180",
  appId: "1:718314571180:web:9399e264570bb4ad0aa609",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

const auth = getAuth(app)

export const login = async ({ email, password }) => {
  try {
    let res = signInWithEmailAndPassword(auth, email, password)
    return res
  } catch (error) {
    console.log(error)
  }
}

const googleProvider = new GoogleAuthProvider()

export const loginWithGoogle = async () => {
  let res = signInWithPopup(auth, googleProvider)
  return res
}
