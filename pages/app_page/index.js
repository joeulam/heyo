
import { useEffect } from 'react'
import { verify } from '@/lib/app_pagecomms';
export default function app_page() {
    
    var today = new Date();


    return(
        <>
        <head>
            <title>Heyo</title>

        </head>
        
            
        <div class="verification">
            <h2>Please verify your account :D</h2>
            <button onClick={verify}>Verify</button>
        </div>



            <div>

            </div>
            <div>
                <h3>Focus mode</h3>
            </div>
            <filedivs>
                <div>
                    Main page
                </div>
                <div>
                    Past days
                </div>
                <div>
                    To do
                </div>
                <div>
                    Stats
                </div>
                <div>
                    Chatbot
                </div>
            </filedivs>
        
        </>
    )
}