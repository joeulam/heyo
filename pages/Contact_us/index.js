import Link from 'next/link';

export default function contact() {

    return(
        <>
            <head>
                <title>Contact Us</title>
            </head>

            <main>
                <div>
                    <h1 class="title">
                        Contact Us 
                    </h1>
                    <div class="contactname">
                        <h3>Name</h3>
                        <input type="text"></input> 
                        <h3>Last name</h3>
                        <input type="text"></input>   
                    </div>               
                </div>
                
            </main>




        </>
    )
}