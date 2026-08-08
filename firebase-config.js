// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBgI0Ng3TFv4q0mMBuWWEdM3wrHOyS2ik",
  authDomain: "toeic-user-management.firebaseapp.com",
  projectId: "toeic-user-management",
  storageBucket: "toeic-user-management.firebasestorage.app",
  messagingSenderId: "765352985248",
  appId: "1:765352985248:web:5194a561152503299b3fc5",
  measurementId: "G-HJL03JWC9H"
};

// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services
export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where };
