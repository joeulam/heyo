import { useRouter } from "next/router";
import { authi } from "../../lib/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Link from 'next/link';
import React, { useEffect } from 'react';


    
            function signup(){
                var x = document.getElementById("hidden");
                

                //var yes = false
                
                    console.log("run")
                    x.style.display = 'block';

                    createUserWithEmailAndPassword(authi, document.getElementById("username").value,document.getElementById("password").value)
                .then((cred) => {


                    console.log(cred)
                    // Signed in 
                        const user = userCredential.user;
                        console.log("clicked")   
                        console.log("pushed")   
                        //yes = true

                    
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    document.getElementById("hidden").innerHTML = error.message
                    document.getElementById("hidden").innerHTML = "Thank you"

                });



               
                    const router = useRouter()
                    router.go("/")
                    router.go("/app_page")
                
                  
                } 
                    
                 // Hide



export default function login() {


    
    return(
        <>
        
            <head>
                <title>Sign up</title>
            </head>

            <main>
                <div>
                    Sign up
                </div>
                <script src="firebase.js"></script>

                <div>
                    <h3>Email:</h3>
                    <input type="email" id="username" name="username"></input>
                    <h3>password</h3>
                    <input type="password" id="password" name="password"></input>
                    
                    <button id="submit" onClick={signup}>Submit</button>
                    
                    <div id="hidden">
                        Thank you
                    </div>
                </div>
                <div>
                    <h1>Sign up with google</h1>
                </div>
            </main>




        </>
    )
}
