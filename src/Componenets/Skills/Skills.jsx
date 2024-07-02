import React from 'react'
import sk1 from '../../Assests/sk1.png'
import sk2 from '../../Assests/sk2.png'
import sk3 from '../../Assests/sk3.png'
import './Skills.css'

function Skills() {
  return (
    <section id='skills'>
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">Explore my proficiency in a diverse array of technologies essential for developing responsive 
        and dynamic web applications as a Full Stack Developer.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={sk1} alt="sk1" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Frontend</h2>
                    <p>Expert in creating dynamic and responsive websites using HTML, CSS, JavaScript, and React.js.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={sk2} alt="sk2" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Backend</h2>
                    <p>Proficiency in developing robust backend services with C#, ASP.NET Web API, MySQL, and Entity Framework Core.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={sk3} alt="sk3" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Project Development and Management</h2>
                    <p>Experienced in designing, implementing, and managing full-cycle projects.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills