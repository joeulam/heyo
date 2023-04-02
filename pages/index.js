import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from "next/router";
import Image from 'next/image';

import Script from 'next/script'

export default function Home() {


  return (
    <>
      <Head>
        {/*---- Imports ads ----*/}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8307744790595208"
     crossorigin="anonymous"></script>
        <title>Heyo</title>
      </Head>
      

      <main class="lamding">
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
        <div class="logob">
          <div class="logo">
          <Image
            priority
            src="/logo.svg"
            height={250}
            width={250}
          />
          </div>
        </div>

        <div class="body">
          
          <div class="main heading">
            <h2>
              Another daily mood tracker with an cute twist    
            </h2>
            <p></p>
            {/*--- Ads ---*/}
            

          </div>

          <div class="buttondiv">
              <div class="sign start">
                <Link href="/signup">
                    <h3>Sign up</h3>
                  </Link>         
              </div>
              <div class="ends sign">
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
