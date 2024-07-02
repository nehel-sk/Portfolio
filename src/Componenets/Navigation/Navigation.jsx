import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { BiMessage } from "react-icons/bi";
import { CgMenuLeft } from "react-icons/cg";
import './Navigation.css'

function Navigation() {

  const [showMenu, setShowMenu]=useState(false)

  return (
    <div>
        <nav className="navbar">
            {/* <img src={logo} alt="logo" className='logo'/> */}
            <h1 className="logo">NSY</h1>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >Portfolio</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >Connect</Link>
            </div>
            <button className='desktopMenuBtn' onClick={() =>{
              document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});
            }}>
              <BiMessage className='contact-btn-icon'/>Contact Me
 
            </button>
            
            <CgMenuLeft className="mobMenu" onClick={()=>{setShowMenu(!showMenu)}}/>
            {/* <img src={Menu} alt="menu" className="menu" onClick={()=>{setShowMenu(!showMenu)}} /> */}
            <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Connect</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>   
    </div>
  )
}

export default Navigation  