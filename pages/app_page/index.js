
import { useEffect } from 'react'

export default function app_page() {
    
    var today = new Date();

    useEffect(() => getdate())

    function getdate(){
        return <h1 id="Date">{today.toDateString()}</h1> // Causing error // 

    }
    return(
        <>
        <head>
            <title>Heyo</title>

        </head>
            <div>
                {getdate()}
            </div>
            <div>
                <h3>Focus mode</h3>
            </div>
        </>
    )
}