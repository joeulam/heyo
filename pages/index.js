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
      

      <main>
        <div class="navb">
        <nav1 class="nav1 main">

          <div1 class="left">
            <h1>Heyo</h1>
          </div1>

          <div class="right end">
            <h3>Contact Us</h3>

          </div>

          <div class="right">
            <h3>About Us</h3>
          </div>

          <div class="right">
            <Link href="/logins">
              <h3>Login</h3>
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
          </div>

          <div class="main sign">
              Sign up
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
