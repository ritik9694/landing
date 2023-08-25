import React from 'react'
import './Courses.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Courses() {
  return (


    <div className='courses'>
      <div className="courses_container">
        <h1>LOOKING TO LEVEL UP YOUR TECH SKILLS?</h1>
        <h6>Join TechnoHacks Live Training Programs</h6>
        <h6>Check out our cutting-edge courses designed to help you thrive in the digital age</h6>
        <h2>Domains :</h2>
        <h6>Programming</h6>
        <h6>Development</h6>
        <h6>Cybersecurity</h6>
        <h6>Digital Marketing</h6>

        <Link to="#" className='btn'>Enquire Now</Link>


      </div>
      
      <div className="courses-img">
        <img src="https://technohacks.co.in/files/img_4.png" alt="" />
       </div>

    </div>

    
  )
}

export default Courses