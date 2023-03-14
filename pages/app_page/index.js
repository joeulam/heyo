
import { useEffect } from 'react'
import { verify } from '@/lib/app_pagecomms';
import { userdata } from '@/lib/app_pagecomms';
import Script from 'next/script'
import { mooddata } from '@/lib/app_pagecomms';
export default function app_page() {
    

    return(
        <>
        <head>
            <title>Heyo</title>

        </head>
        
            <main class="mainapp">

        <div class="verification">
            <h2>Please verify your account :D</h2>
            <button onClick={verify}>Verify</button>
            <h3 id="sent"></h3>
        </div>

        
        <body class="bodyapp">
            <div>
                <h2 id="userlogged">
                    user
                </h2>
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
                <div>
                    <a href='/checkin'>Checkin</a>
                </div>
                
            </filedivs>
           
        </body>
        </main>

        </>
        
    )
}