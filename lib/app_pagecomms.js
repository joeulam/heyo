
/*
function getdate(){
    if (typeof window !== "undefined") {
    var today = new Date();
    document.getElementById(date).innerHTML = today;
}
}

export const datecom = getdate();
*/

import { authi, database } from "./firebase";
import { sendEmailVerification } from "firebase/auth";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import  Router from "next/router";
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




  const date = new Date();
  var value;
  function mood(){
    console.log(serverTimestamp())            

    var radios = document.getElementsByTagName('input');
    var writing = document.getElementById("writing").value;
    console.log(writing);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            value = radios[i].value;
            console.log(value) 
            const usercol = collection(database,"users/"+authi.currentUser.uid+"/data")
            authi.onAuthStateChanged(user => {

                if(user){
                    setDoc(doc(usercol,"'"+ date+"'"),{
                        mood: value,
                        journal: writing

                    })
                    .then(docRef => {
                        console.log("submitted")
                        Router.push("/app_page")
                    })
                    .catch((error) =>{
                        console.log(serverTimestamp)
                        console.log(error)
        
                    })
                }
            })
            
        }
        else{
            console.log("value")    
        }
    }
    
  };
export const userdata = user;
export const ondones = ondone
export const verify = verifys
export const mooddata = mood
// DOSNT WORK YET //