import React from 'react'
import {  NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>


<nav className="navbar navbar-expand-lg shadow bg-body-tertiary rounded sticky-top">
  <div className="container ">
    <a className="navbar-brand fs-2 text-danger name fw-semibold" href="/">H  <span className='fs-6 text-black'>em Bahadur Bohara</span>.</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button> 
    <div className="collapse navbar-collapse align-self-center " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-2 fw-normal text-center ">
        <li className="nav-item">
          <NavLink className="nav-link text-white" activeClassName="active" aria-current="page" to="/"><i class="fa-solid fa-house"></i> Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" activeClassName="active" to="/about"><i class="fa-solid fa-user"></i> About Me</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" activeClassName="active" to="/skills"><i class="fa-solid fa-toolbox"></i> My Skills</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" activeClassName="active" to="/work"><i className="fa-solid fa-folder-open"></i> My Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" activeClassName="active" to="/experience"><i className="fa-solid fa-briefcase"></i> My Experience</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" activeClassName="active" to="/contact"><i class="fa-regular fa-paper-plane"></i> Contact</NavLink>
        </li>
        
      </ul>
      <form className="d-flex ms-2  " role="search">
        {/* <a href=""><button className="btn btn hire fs-5" type="submit">Hire Me</button></a> */}
        <a class="btn btn hire fs-5" href="https://wa.me/9779840046062" role="button">Hire Me</a>
      </form>
    </div>
  </div>
</nav>



    </>
  )
}

export default Navbar