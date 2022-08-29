import React from "react"
import Logo from "./main-pic.png"
function Header() {
    return (
        <header>
                <img src={Logo} className="Header-pic" />
        </header>
    )
}
export default Header;