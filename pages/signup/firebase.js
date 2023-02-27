import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  apiKey: "AIzaSyASPwhGSQnsKcm1_DA82wipTWYiVQwd0ew",
  authDomain: "heyojs.firebaseapp.com",
  projectId: "heyojs",
  storageBucket: "heyojs.appspot.com",
  messagingSenderId: "529104327730",
  appId: "1:529104327730:web:c65c226a7f57261e91d82b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("run")

    return(true)
    // ...

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


  export const authi = getAuth()
  export const createuser = createUserWithEmailAndPassword()
