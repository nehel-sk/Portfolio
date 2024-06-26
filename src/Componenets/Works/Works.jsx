import React from 'react'
import './Works.css'
import Port1 from '../../Assests/Port1.jpg'
import Port2 from '../../Assests/Port2.jpg'
import Port3 from '../../Assests/Port3.jpg'
import Port4 from '../../Assests/Port4.jpg'
import Port5 from '../../Assests/Port5.jpg'
import Port6 from '../../Assests/Port6.jpg'

function Works() {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className='worksDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, omnis nulla! Assumenda corporis ipsa consequuntur
         vitae! Ipsa reprehenderit iusto ratione, nam id error! Eligendi doloribus error debitis rerum, amet beatae.</span>
        <div className="worksImgs">
            <img src={Port1} alt="PortImg" className="worksImg" />
            <img src={Port2} alt="PortImg" className="worksImg" />
            <img src={Port3} alt="PortImg" className="worksImg" />
            <img src={Port4} alt="PortImg" className="worksImg" />
            <img src={Port5} alt="PortImg" className="worksImg" />
            <img src={Port6} alt="PortImg" className="worksImg" />
        </div>
        <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works