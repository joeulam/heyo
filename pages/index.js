import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from "next/router";

import Script from 'next/script'

export default function Home() {


  return (
    <>
      <Head>
        {/*---- Imports ads ----*/}
      <Script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></Script>
        <title>Heyo</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
      </Head>
      

      <main>
        <div class="navb">
          <nav1 class="nav1 main">

            <div1 class="left">
              <h1>Heyo</h1>
            </div1>

            <div class="right end">
              <Link href="/Contact_us">
              <h3>Contact Us</h3>

              </Link>


            </div>

            <div class="right">
            <Link href="/About_us">

              <h3>About Us</h3>
              </Link>
            </div>
          </nav1>
        </div>
        
        <div class="body">

          <div class="main heading">
            <h2>
              Another daily mood tracker with an cute twist    
            </h2>
            <p>wbuawudwuowd</p>
            {/*--- Ads ---*/}
            <amp-ad width="100vw" height="320"
              type="adsense"
              data-ad-client="ca-pub-8307744790595208"
              data-ad-slot="4900643708"
              data-auto-format="rspv"
              data-full-width="">
            <div overflow=""></div>
          </amp-ad>

          </div>

          <div class="buttondiv">
              <div class="sign">
                <Link href="/signup">
                    <h3>Sign up</h3>
                  </Link>         
              </div>
              <div class="sign ends">
                <Link href="/logins">
                  <h3>Login</h3>
                </Link>
              </div>
            </div>
          </div>
          
        


        <footer class="footer">
            
                <div id="creater">
                    Created by Joey Lam
                </div>

                
        </footer>
      </main>
    </>
  )
}
