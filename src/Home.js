import React from 'react'
import './Home.css'
// import {image} from 'src/img/techno_img-removebg-preview.png'

function Home() {
  return (
    <div className='home'>
           <div className='home_content'>
            <h3> WELCOME To</h3>
            <h1> <span>Technohacks.</span></h1>
            <h3>Develop Anything</h3>

            <p>We provide top notch IT training and cutting-
              edge product to help business and individuals stay ahead in the ever-evolving tech landscape</p>

            <button className='btn'> Internships </button>
            <button className='btn2'> Join Us </button>

           </div>

           <div className='home-img'>
            <img src='https://lh3.googleusercontent.com/p/AF1QipOQT_xvlo6ALHEk8OgC7es4dTB4QhsfsHz13su6=w768-h768-n-o-v1' alt='' />
            </div>

    </div>
  )
}

export default Home