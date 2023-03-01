
import Link from 'next/link';
import { useRouter } from "next/router";



import { signInWithEmailAndPassword } from "firebase/auth";
import { authi } from "../../lib/firebase.js";

// Login API takes in email and password // 
function logins(){
    console.log("clicked")
    signInWithEmailAndPassword(authi, document.getElementById("email").value,document.getElementById("password").value)
    .then((userCredential) => {
      // Signed in and changes the URL //  
      location.replace("/app_page")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message; // Outputs error message (Maybe try and get it to print only the error message)// 
      console.log(error.message)
    });
}


export default function login() {

    return(
        <>
            <head>
                <title>Login</title>
            </head>

            <main>
            <div class="signinbox">
                <h2>Login</h2>
                <div class="signin">
                    <h3>Email:</h3>
                        <input type="email" id="email" name="email"></input>
                    <h3>password</h3>
                        <input type="password" id="password" name="password"></input>
                    </div>
                    
                    
                    <button id="submit" onClick={logins}>Submit</button>
                    <div>
                    <h3>Login with google</h3>
                </div>
            </div>

                
            </main>




        </>
    )
}
