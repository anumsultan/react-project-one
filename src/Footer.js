import React from "react"
import twitter from "./Twitter-Icon.png"
import facebook from "./Facebook-Icon.png"
import instagram from "./Instagram-Icon.png"
import gitHub from "./GitHub-Icon.png"
 function Footer() {
    return (
        <footer className="footer1">

           <a href="https://twitter.com/i/flow/login" >
            <img src={twitter}></img>
           </a>
           <a href="https://www.facebook.com/" > <img src={facebook}></img> </a>
           <a href="https://www.instagram.com/" > <img src={instagram}></img> </a>
           <a href="https://github.com/login/oauth/authorize" > <img src={gitHub}></img> </a>

        </footer>
    )
}
export default Footer;
