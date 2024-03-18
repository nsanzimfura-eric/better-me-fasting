import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const app = initializeApp({
  apiKey: "AIzaSyBL2k0icDV5_LHKk21DWWET2jH4DNvL1CY",
  authDomain: "data-controller-7f9c5.firebaseapp.com",
  projectId: "data-controller-7f9c5",
  storageBucket: "data-controller-7f9c5.appspot.com",
  messagingSenderId: "146055875589",
  appId: "1:146055875589:web:f888c6aeac5fb9a575206c",
  measurementId: "G-HXZTHV53KT",
});

const storage = getStorage(app);
export default storage;
