import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmDCfNbfhcuiwD7Of_mCda8UAf39Ffp-k",
  authDomain: "netflix-clone-cc598.firebaseapp.com",
  projectId: "netflix-clone-cc598",
  storageBucket: "netflix-clone-cc598.appspot.com",
  messagingSenderId: "580065047992",
  appId: "1:580065047992:web:8817a872a548f787ba0b4d",
  measurementId: "G-04JQE5TWKN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
