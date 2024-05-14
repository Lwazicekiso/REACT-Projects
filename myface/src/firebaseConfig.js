// firebaseConfig.js//
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcbhzD0s-YHWF4dvdc-5Uu_0poZcZqx6Q",
  authDomain: "myface-1c85c.firebaseapp.com",
  projectId: "myface-1c85c",
  storageBucket: "myface-1c85c.appspot.com",
  messagingSenderId: "487516281257",
  appId: "1:487516281257:web:97bc87ed2a48e553734cb8",
  measurementId: "G-650XZQJ186"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 