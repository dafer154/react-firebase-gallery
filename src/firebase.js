import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyAeyWCmGDCQcMj-GUMcK_EK1gjYy6pspoI",
    authDomain: "gallery-97c49.firebaseapp.com",
    projectId: "gallery-97c49",
    storageBucket: "gallery-97c49.appspot.com",
    messagingSenderId: "824209950823",
    appId: "1:824209950823:web:98652c611a59c1b2e6acc2",
    measurementId: "G-NX39GFEC7M"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };