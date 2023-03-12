
/*
function getdate(){
    if (typeof window !== "undefined") {
    var today = new Date();
    document.getElementById(date).innerHTML = today;
}
}

export const datecom = getdate();
*/

import { authi } from "./firebase";
import { sendEmailVerification } from "firebase/auth";
const user = authi.currentUser;

function verifys(){
    if(!user.emailVerified){
        sendEmailVerification(authi)
        .then(() => {
            console.log("Sent");
            document.getElementById("sent").innerHTML = "Thank you the email has been sent"
            document.getElementById("userlogged").innerHTML = "The current user: " + user.displayName;
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            document.getElementById("userlogged").innerHTML = "The current user: " + user.displayName;

        });
    }
    else{
        console.log("Your already verified");
        document.getElementById("userlogged").innerHTML = "The current user: " + user.displayName;

    }
}


    function ondone(){
        console.log("RUNNING")
        document.getElementById("userlogged").innerHTML = "The current user: " + user.displayName
  };

export const userdata = user;
export const ondones = ondone
export const verify = verifys

// DOSNT WORK YET //