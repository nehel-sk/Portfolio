import React, { useState } from 'react'
import './Works.css'

function Works() {

  const [show,setShow]=useState(false);

  const handleClick=()=>{
    setShow(!show);
  }

  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className='worksDesc'>Explore a showcase of my work as a Full Stack Developer, 
        highlighting my expertise in creating responsive web applications. </span>
        

        <div className="workCards">
          <div className="card card1">
            <div className="cardContent">
              <h3>Curlz</h3>
              <p>Curlz is a React-based web app for efficient salon appointment bookings using C# and ASP.NET Web API.</p>
              {/* <button className="cardBtn">View Project</button> */}
            </div>
          </div>

          <div className="card card2">
            <div className="cardContent">
              <h3>Netflix Clone</h3>
              <p>Netflix Clone is a ReactJS web app replicating Netflix's interface with seamless video playback.</p>
              {/* <button className="cardBtn">View Project</button> */}
            </div>
          </div>

          <div className="card card3">
            <div className="cardContent">
              <h3>Musicfy</h3>
              <p>Musicfy is a React-based web app for playing and managing music with an intuitive, user-friendly interface.</p>
              {/* <button className="cardBtn">View Project</button> */}
            </div>
          </div>
          
          {show &&
          <div className="card card4" >
            <div className="cardContent">
              <h3>To-Do List</h3>
              <p>ToDo List is a React-based web application designed for managing tasks efficiently with a clean and user-friendly interface.</p>
              {/* <button className="cardBtn">View Project</button> */}
            </div>
          </div>
          }

          {show &&
          <div className="card card5" >
            <div className="cardContent">
              <h3>Tic-Tac-Toe</h3>
              <p>It is a React-based application that allows users to play the classic game of Tic-Tac-Toe.</p>
              {/* <button className="cardBtn">View Project</button> */}
            </div>
          </div>
          }


        </div>
        {!show && 
        <button className="worksBtn" onClick={handleClick}>See More</button>}

        {show && 
        <button className="worksBtn" onClick={handleClick}>Show Less</button>}
    </section>
  )
}

export default Works