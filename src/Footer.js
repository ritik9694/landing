import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'

function Footer() {
  const refresh = () =>
  setTimeout(function () {
    window.location.reload();
  }, 1000);

  return (
    <div className='footer'>
        <div className="footer-text">
        <p>Copyright &copy; 2023 by Hrithik | All Right Reserved.</p>
        </div>

        <div className="footer-text2">
            <p>Hrithik Kumar</p>
            <p>ritikyadaw9@gmail.com</p>
            <p>+91</p>
        </div>

        <div className="footer-text3">
            <Link to="/home"  onClick={refresh} >Home</Link>
        </div>


        <div className="footer-text3">
        <Link to="/about"  onClick={refresh}>About</Link>
        </div>

        <div className="footer-text3">
        <Link to="/courses"  onClick={refresh}>Courses</Link>
        </div>

        <div className="footer-text3">
        <Link to="/contact" onClick={refresh}>Contact Us</Link>
        </div>

        <div className="social-media">
                <Link to="https://www.instagram.com/ll___sarkar___ll/?hl=en"><img src="" alt="iG" /></Link>
                <Link to="#"><img src="" alt="FB" /></Link>
                <Link to="#"><img src="" alt="L" /></Link>

            </div>

    </div>
  )
}

export default Footer