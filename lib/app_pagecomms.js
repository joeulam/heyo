function getdate(){
    if (typeof window !== "undefined") {
    var today = new Date();
    document.getElementById(date).innerHTML = today;
}
}

export const datecom = getdate();


import { authi } from "./firebase";
import { user } from "./firebase";



function verifys(){
    sendEmailVerification()
    .then(() => {
        console.log("Sent");
    });
}
export const verify = verifys()