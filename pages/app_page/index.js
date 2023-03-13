
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

                
            </filedivs>
            <div>
                <div class="mood">
                <h3>How are you feeling today? </h3> <p>(1 is the worst 10 is the best)</p>

                </div>
                <form class="moodpoint">
                    <input type="radio" id="1" name="mood" value='1'/>
                    <label for = "1">1</label>

                    <input type="radio" class="radio1"id="1" name="mood" value='2'/>
                    <label for = "2">2</label>

                    <input type="radio" class="radio1"id="1" name="mood" value='3'/>
                    <label for = "3">3</label>

                    <input type="radio" class="radio1"id="1" name="mood" value='4'/>
                    <label for = "4">4</label>

                    <input type="radio" class="radio1"id="1" name="mood" value='5'/>
                    <label for = "5">5</label>

                    <input type="radio" class="radio1"id="1" name="mood" value='6'/>
                    <label for = "6">6</label>

                    <input type="radio" class="radio1"id="1" name="mood" value='7'/>
                    <label for = "7">7</label>

                    <input type="radio" class="radio1"id="1" name="mood" value='8'/>
                    <label for = "8">8</label>

                    <input type="radio" class="radio1"id="1" name="mood" value='9'/>
                    <label for = "9">9</label>

                    <input type="radio" class="radio1"id="1" name="mood" value='10'/>
                    <label for = "10">10</label>
                    <br/>
                </form>
                <button onClick={mooddata}>Submit</button>

                
            </div>
        </body>
            
        </>
        
    )
}