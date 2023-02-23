import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();
  const handleClick = (e, path) => {
    e.preventDefault()
    if (path === "/loginpage") {
      console.log("I clicked on the login Page");
      // then you can: 
      router.push(path)
    }
    else{
      console.log("failed");
    }
  }

  return (
    <>
      <Head>
        <title>Heyo</title>
      </Head>
      

      <main class="main">
        <h1>Heyo</h1>

        <div>
          <h2>
            Another daily mood tracker with an twist    
          </h2>
        </div>

        <div>
          <div>
            Sign up
          </div>

          <div>
          <Link href="/logins">
            Login
          </Link>
                          
          </div>
        </div>


        <footer class="footer">
            <div>
                Contact Us
            </div> 
            
                <div id="creater">
                    Created by Joey Lam
                </div>

                <div class="r">
                    <div class="right">
                        Instagram
                    </div>
                    <div class="right">
                        Email
                    </div>
                    <div class="right">
                        Number
                    </div>   
                </div>
                
        </footer>
      </main>
    </>
  )
}
