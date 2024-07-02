import React from 'react'
import { Link } from 'react-scroll'
import ProfileB from '../../Assests/ProfileB.jpg'
import './Intro.css'
import { MdWorkOutline } from "react-icons/md";

function Intro() {
  return (
    <div>
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Nehel Sunny</span> <br /> FullStack Developer</span>
                <p className="introPara">I am a skilled full-stack developer creating seamless,<br /> scalable web applications with expertise.</p>
                <Link to='contact' smooth={true} offset={-50} duration={500}><button className='btn'><MdWorkOutline className='hire-me-icon'/>Hire Me</button></Link>
            </div>
            <img src={ProfileB} alt="Profile" className="bg" />
        </section>
    </div>
  )
}

export default Intro