// initialize Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAyGycV2HojX2brsy5-sx1myQ9-F8wJxUo",
    authDomain: "jd-spa.firebaseapp.com",
    projectId: "jd-spa",
    storageBucket: "jd-spa.appspot.com",
    messagingSenderId: "488595634284",
    appId: "1:488595634284:web:c448372997626904a04049",
    measurementId: "G-S69Z10VP0V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
