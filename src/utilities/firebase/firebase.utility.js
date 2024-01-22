// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
 
} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVU27ECeUc8vgLo06NGTkARm_OGKBf_zs",
  authDomain: "crwn-clothing-db-ebfd7.firebaseapp.com",
  projectId: "crwn-clothing-db-ebfd7",
  storageBucket: "crwn-clothing-db-ebfd7.appspot.com",
  messagingSenderId: "535688488218",
  appId: "1:535688488218:web:08b5d5207207343247b8a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();//who will provide the authentication with firebase
provider.setCustomParameters({prompt:"select_account",
})

export const auth = getAuth();//refrence to authentication service in firebase
export const signInWithGooglePopup = ()=>signInWithPopup(auth,provider);//return a object that contain the user 
export const signInWithGoogleRedirect = ()=>signInWithRedirect(auth,provider);

export const db = getFirestore();//
export const createUserDocumentFromAuth = async(userAuth,additionalInfo)=>
{
  if(!userAuth){return}
  const userDocRef = doc(db,"users",userAuth.uid);//db collection document -- a refrence to a document. we choose userAuth.uid to be
  //the document name because it is unique.
  const userSnapShot = await getDoc(userDocRef);//return the data for this path
  console.log(userSnapShot);
  if(!userSnapShot.exists())
  {
    const {displayName,email} = userAuth;
    const createdAt = new Date();
    try
    {
      setDoc(userDocRef,{displayName,
      email,
    createdAt,
  ...additionalInfo})
    }
    catch(error)
    {
      console.log(`error creating the user ${error.message}`);
    }
  }
  return userDocRef;
}
export const createAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password) 
  return
  else
{
 return await createUserWithEmailAndPassword(auth,email,password);
}
}

export const signInAuthUser = async (email,password)=>{
  if(!email || !password) 
  return
  else
{
 return await signInWithEmailAndPassword(auth,email,password);
}
}
export const signOutUser = async ()=> await signOut(auth);
export const onAuthChangeStateListener = (callback)=>onAuthStateChanged(auth,callback);