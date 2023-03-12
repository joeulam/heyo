import  Router from "next/router";
import { authi } from "../../lib/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Link from 'next/link';
import React, { useEffect } from 'react';


    
function signup(){

    // Sign Up function API taking in a email and password//
    createUserWithEmailAndPassword(authi, document.getElementById("email").value,document.getElementById("password").value)
        .then((cred) => {
            location.replace("/app_page")                    
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
                        //Prints the error code//
        }
    );
} 
                    
const provider = new GoogleAuthProvider();
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function google(){
  signInWithPopup(authi, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    Router.push("/app_page")

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorMessage);
  });
}


export default function accountcreater() {


    
    return(
        <>
        
            <head>
                <title>Sign up</title>
            </head>
           
            <main>
            <div class="signinbox">

                    <h2>Sign up</h2>
                <div class="signin">

                    <h3>Email:</h3>
                    <input type="email" id="email" name="email"></input>
                    <h3>password</h3>
                    <input type="password" id="password" name="password"></input>
                    
                    
                    
                </div>
                <button id="submit" onClick={signup}>Submit</button>

                <div>
                    <button onClick={google}>
                        <h3>
                            Sign up with google
                        </h3>
                    </button>
                </div>
            </div>

            </main>




        </>
    )
}
