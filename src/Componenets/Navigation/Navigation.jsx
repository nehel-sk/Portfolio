import React from 'react'
import {Link} from 'react-scroll'
import { BiMessage } from "react-icons/bi";
import './Navigation.css'

function Navigation() {
  return (
    <div>
        <nav className="navbar">
            {/* <img src={logo} alt="logo" className='logo'/> */}
            <h1 className="logo">NSY</h1>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Clients</Link>
            </div>
            <button className='desktopMenuBtn'>
              <BiMessage className='contact-btn-icon'/>Contact Me

            </button>
        </nav>   
    </div>
  )
}

export default Navigation  