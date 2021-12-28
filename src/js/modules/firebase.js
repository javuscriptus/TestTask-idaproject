import {
    getFirestore
} from 'firebase/firestore';
import {
    initializeApp
} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyASNdPobYceEDLl2hsDJYdt-uNNtVi5BhQ",
    authDomain: "test-task-idaproject.firebaseapp.com",
    projectId: "test-task-idaproject",
    storageBucket: "test-task-idaproject.appspot.com",
    messagingSenderId: "751450663105",
    appId: "1:751450663105:web:12830a93031cdd5cba8c40"
};

initializeApp(firebaseConfig);
export const db = getFirestore();