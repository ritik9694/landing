import React from 'react'
import './About.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'

function About() {
  return (
    <div className='about'>
      <h2 className='heading'>Our <span>Services</span></h2>

      <div className="about_container">
        <div className="about_box">
          <i className='bx bxs-paint'></i>
          <h3>Trainings & Internships</h3>
          <p>Unlock your potential wth our comprehensive IT training and internship programs , designed for student and working professionals to enhance their skilss and advanced their careers.</p>
          <Link to="#" className='btn'>Read More</Link>
        </div>
      </div>

      <div className="about_container">
        <div className="about_box">
          <i className='bx bxs-paint'></i>
          <h3>Consultancy </h3>
          <p>Looking to boost your IT skills and career prospects? Our consultancy services offer personalized guidance for students and professionals seeking to take their expertise to the next level.</p>
          <Link to="#" className='btn'>Read More</Link>
        </div>
      </div>

      <div className="about_container">
        <div className="about_box">
          <i className='bx bxs-paint'></i>
          <h3>Software Development </h3>
          <p>Accelerate your digital transformation with our comprehensive software development solutions tailored to your business needs.</p>
          <Link to="#" className='btn'>Read More</Link>
        </div>
      </div>

      <div className="about_container">
        <div className="about_box">
          <i className='bx bxs-paint'></i>
          <h3>Digital Marketing</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ipsam velit aliquam officiis qui, officia omnis molestias est excepturi esse expedita at beatae dolor nostrum fugiat quae sequi ea fugit facere minus, magni aliquid.</p>
          <Link to="#" className='btn'>Read More</Link>
        </div>
      </div>


    </div>
  )
}

export default About