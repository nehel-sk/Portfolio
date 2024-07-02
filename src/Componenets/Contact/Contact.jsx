import React, { useRef, useState } from 'react'
import './Contact.css'
import { LuInstagram } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();

  const [info,setInfo] = useState({});
  const [errors,setErrors] = useState({});

  const handleChange=(e)=>{
    setInfo((prev)=>({...prev, [e.target.name]:e.target.value}))

    if(!e.target.value){
      setErrors((prev)=>({...prev,[e.target.name]:'This field is required!'}));
    }
    else if(e.target.name ==='user_email' && !e.target.value.endsWith('@gmail.com')){
      setErrors((prev)=>({...prev, user_email:'Email should end with @gmail.com'}));
    }
    else{
      setErrors((prev)=>({...prev, [e.target.name]: null}));
    }
  }

  
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const requiredFields = ['user_name','user_email','message'];
    for(let field of requiredFields){
      if(!info[field]){
        alert(`Please fill the ${field} field!`);
        return;
      }
    }

    if(errors.user_email){
      alert(errors.user_email);
      return;
    }

    sendEmail(e);
  }



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
        

        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
          
          <form className="contactForm" ref={form}  onSubmit={handleSubmit}>

            <input type="text" className="name" placeholder='Your Name' name='user_name' onChange={handleChange}/>
            {errors.user_name && <span className="error">{errors.user_name}</span>}

            <input type="email" className="email"  placeholder='Your Email' name='user_email' onChange={handleChange}/>
            {errors.user_email && <span className='error'>{errors.user_email}</span>}

            <textarea name="message" className='msg' rows="5" placeholder='Your Message' onChange={handleChange}></textarea>
            {errors.message && <span className='error'>{errors.message}</span>}

            <button type='submit' value='send' className="submitBtn" >Submit</button>
            <div className="links">
              <a href='https://www.instagram.com/nehel_s_k/'><LuInstagram className='link'/></a>
              <a href='https://www.linkedin.com/in/nehel-sunny/'><IoLogoLinkedin className='link' /></a>
              <a href='https://github.com/nehel-sk'><FaGithub className='link'/></a>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact