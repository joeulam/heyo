
import Link from 'next/link';
import  Router from "next/router";



import { signInWithEmailAndPassword } from "firebase/auth";
import { authi } from "../../lib/firebase.js";

// Login API takes in email and password // 
function logins(){
    console.log("clicked")
    signInWithEmailAndPassword(authi, document.getElementById("email").value,document.getElementById("password").value)
    .then((userCredential) => {
      // Signed in and changes the URL //  
      Router.push("/app_page")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message; // Outputs error message (Maybe try and get it to print only the error message)// 
      console.log(error.message)
      document.getElementById("errormsg").innerHTML = errorMessage
    });
    
}
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

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
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
}
export default function login() {

    return(
        <>
            <head>
                <title>Login</title>
            </head>
            
            <main class="loginback">

                
                <body class="signinbody">
                    <div class="signinbox">
                        <h2>Login</h2>

                        <div class="signin">
                            <h3>Email:</h3>
                                <input type="email" id="email" name="email"></input>
                            <br/>
                            <h3>password</h3>
                                <input type="password" id="password" name="password"></input>
                        </div>
                        
                        <br/>
                        <button id="submit" onClick={logins}>Submit</button>
                        <div>
                            <button onClick={google}>
                                <h3>
                                    Login with google
                                </h3>
                            </button>
                        </div>
                    <h3 id="errormsg"></h3>
                    </div>

                    <div class="leftnote">

                    </div>


                </body>
           
                
            </main>




        </>
    )
}
