

import { userdata } from '@/lib/app_pagecomms';
function ondone(){
    console.log("RUNNING")
    document.getElementById("userlogged").innerHTML = "The current user: " + userdata.displayName
}