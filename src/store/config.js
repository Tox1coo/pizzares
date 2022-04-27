import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDhNU6VStsE8xEbGH2rFyfF4sKT0q2hgDo",
  authDomain: "pizzares-a5b4d.firebaseapp.com",
  databaseURL:
    "https://pizzares-a5b4d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pizzares-a5b4d",
  storageBucket: "pizzares-a5b4d.appspot.com",
  messagingSenderId: "898693617111",
  appId: "1:898693617111:web:433e3f20bcef6e415fa792",
  measurementId: "G-KGHD8BZND4",
});
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(firebaseConfig);
