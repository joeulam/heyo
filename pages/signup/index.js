import { useRouter } from "next/router";
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
                    
                 // Hide



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
                    <h3>Sign up with google</h3>
                </div>
            </div>

            </main>




        </>
    )
}
