import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_ghL5L7bF2i3rLfVIUelylO_tPyxJJ9g",
  authDomain: "netflix-2-689ee.firebaseapp.com",
  projectId: "netflix-2-689ee",
  storageBucket: "netflix-2-689ee.appspot.com",
  messagingSenderId: "220796335499",
  appId: "1:220796335499:web:4f61a11f6d5266cb2c2b8e",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
