import React, { useRef } from 'react'
import './Contact.css'
import zepto from '../../Assests/zepto.png'
import walmart from '../../Assests/walmart.png'
import swiggy from '../../Assests/swiggy.png'
import { LuInstagram } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0qe0grq', 'template_y98sou7', form.current, {
        publicKey: '9vYUzSW6OndWixQMj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email successfuly sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="" id="contactPage">
        <div id="clients">
            <h1 className="clientTitle">My Clients</h1>
            <p className="clientDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eligendi. 
            Ea, aperiam, corporis vero nam nobis officia magnam, ipsa dignissimos cum mollitia neque sed molestias. 
            Veniam corporis ducimus illo provident.</p>
            <div className="clientImgs">
                <img src={zepto} alt="client" className="clientImg" />
                <img src={walmart} alt="client" className="clientImg" />
                <img src={swiggy} alt="client" className="clientImg" />
                
            </div>

        </div>

        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
          
          <form className="contactForm" ref={form}  onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='user_name'/>
            <input type="email" className="email"  placeholder='Your Email' name='user_email'/>
            <textarea name="message" className='msg' rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='send' className="submitBtn">Submit</button>
            <div className="links">
              <a href=''><LuInstagram className='link'/></a>
              <a href=''><IoLogoLinkedin className='link' /></a>
              <a href=''><FaGithub className='link'/></a>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact