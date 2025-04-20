
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, doc, getDocs, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFIPndIGkKXY5XCSkT2yRAVxf0EsES9z4",
  authDomain: "talkhaus-7b09b.firebaseapp.com",
  projectId: "talkhaus-7b09b",
  storageBucket: "talkhaus-7b09b.appspot.com",
  messagingSenderId: "19913818318",
  appId: "1:19913818318:web:0cc99b7be9d6e444c2109f",
  measurementId: "G-615M7XCBD9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.firebaseTools = {
  auth,
  db,
  collection,
  doc,
  getDocs,
  updateDoc,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
};
