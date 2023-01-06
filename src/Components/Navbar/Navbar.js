import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import logo from "../Images/logo.png"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
    <div className="heading">
      <nav className='navbar'>
        <div className='logo'>
          <img src={logo} height={50} width={50} alt={"Aurangabad Ploggers"}/>
          <a href="https://www.instagram.com/aurangabadplooggers" class="logo"><span>Aurangabad</span>Ploggers</a>

        </div>
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/about' className='about'>
            <li>About</li>
          </Link>
          <Link to='/Events' className='Events'>
            <li>Events</li>
          </Link>
          <Link to='/Gallery' className='Gallery'>
            <li>Gallery</li>
          </Link>
          <Link to='/Volunteer' className='Volunteer'>
            <li>Volunteer</li>
          </Link>
          <Link to='/Contact' className='Contact'>
            <li>Contact</li>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
      </div>
    </>
  )
}
export default Navbar
