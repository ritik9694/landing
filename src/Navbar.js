import React from 'react'
import { Link } from "react-router-dom";

const Navbar= () => {
  const refresh = () =>
  setTimeout(function () {
    window.location.reload();
  }, 1000);


  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <Link className="navbar-brand" to="/"  onClick={refresh} >TECHNOHACKS</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <Link className="nav-link" to="/home"  onClick={refresh} >Home </Link>
      </li>


      <li className="nav-item">
        <Link className="nav-link" to="/about"  onClick={refresh}>About</Link>
      </li>

      
      <li className="nav-item">
        <Link className="nav-link" to="/courses"  onClick={refresh}>Courses</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="contact"  onClick={refresh}>Contact Us</Link>
      </li>


    </ul>

  </div>
</nav>
    </>
  )
}

export default Navbar