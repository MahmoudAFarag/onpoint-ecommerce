import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCI0wDLDa1Kt1DeC9sKtMOqVOnMlRGjLSc',
  authDomain: 'onpoint-ecommerce.firebaseapp.com',
  projectId: 'onpoint-ecommerce',
  storageBucket: 'onpoint-ecommerce.appspot.com',
  messagingSenderId: '563075176622',
  appId: '1:563075176622:web:2fc947240fa02e0cb5353f',
  measurementId: 'G-FJGYSXT36X',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase Auth
export const auth = getAuth();
