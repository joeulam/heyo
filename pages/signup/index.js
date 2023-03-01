import { useRouter } from "next/router";
import { authi } from "../../lib/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Link from 'next/link';
import React, { useEffect } from 'react';


    
function signup(){
    var x = document.getElementById("hidden");
    x.style.display = 'block';
    // Sign Up function API taking in a email and password//
    createUserWithEmailAndPassword(authi, document.getElementById("email").value,document.getElementById("password").value)
        .then((cred) => {
            location.replace("/app_page")                    
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
                        //Prints the error code//
            document.getElementById("hidden").innerHTML = error.message 
        }
    );
} 
                    
                 // Hide



export default function login() {


    
    return(
        <>
        
            <head>
                <title>Sign up</title>
            </head>

            <main>
            <div class="signinbox">

                <div>
                    Sign up
                </div>
                <div class="signin">

                <div>
                    <h3>Email:</h3>
                    <input type="email" id="email" name="email"></input>
                    <h3>password</h3>
                    <input type="password" id="password" name="password"></input>
                    
                    <button id="submit" onClick={signup}>Submit</button>
                    
                    
                </div>
                </div>
                <div>
                    <h1>Sign up with google</h1>
                </div>
                </div>

            </main>




        </>
    )
}
