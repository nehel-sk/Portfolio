import React from 'react'
import sk1 from '../../Assests/sk1.png'
import sk2 from '../../Assests/sk2.png'
import sk3 from '../../Assests/sk3.png'
import './Skills.css'

function Skills() {
  return (
    <section id='skills'>
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">Lorem, ipsum dolor sit ame anditiis consectetur voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Rerum nemo nam, deleniti magni obcaecati, saepe libero quibusdam </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={sk1} alt="sk1" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Front-End</h2>
                    <p>This is a demo text, add the content you wish</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={sk2} alt="sk2" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Backend</h2>
                    <p>This is a demo text, add the content you wish</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={sk3} alt="sk3" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Database</h2>
                    <p>This is a demo text, add the content you wish</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills