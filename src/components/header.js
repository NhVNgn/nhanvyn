import * as React from "react"
import { Link } from "gatsby"
import "./header.css"
import { useRef, useEffect } from "react"




const Header = ({ experienceRef }) => {
  const srollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: 'smooth'
    })
  }



  useEffect(() => {
    console.log(experienceRef.current, 'header.js');
  }, [])

  return (
    <div className="header">
      <nav className="navigationWrapper">
        <ul>
          <li>
            About
          </li>
          
          <li onClick={() => srollToSection(experienceRef)}>
            Experience
          </li>

          <li>
            Project
          </li>

          <li>
            Resume
          </li>
          <li>
            Contact
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Header;