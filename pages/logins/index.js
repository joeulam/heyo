import { useRouter } from "next/router";
import { authi, createuser } from "../signup/firebase.js";

import Link from 'next/link';
import React, { useEffect } from 'react';


    
            function signup(){
                document.getElementById("submit").onclick = function() {
                    if(createUserWithEmailAndPassword((document.getElementById(username),document.getElementById(password))))
                    {
                        console.log("clicked")
                        const handleClick = (e, path) => {
                            e.preventDefault()
                            if (path === "/app_page") {
                              console.log("I clicked on the login Page");
                              // then you can: 
                              router.push(path)
                            }
                        }
                    }
                } 
            }         
            



export default function login() {


    
    return(
        <>
        
            <head>
                <title>Login</title>
            </head>

            <main>
                <div>
                    Login
                </div>
                <script src="firebase.js"></script>

                <div>
                    <h3>Username:</h3>
                    <input type="email" id="username" name="username"></input>
                    <h3>password</h3>
                    <input type="password" id="password" name="password"></input>
                    
                    <button id="submit" onClick={signup}>Submit</button>
                    
                </div>
                <div>
                    <h1>Sign in with google</h1>
                </div>
            </main>




        </>
    )
}
