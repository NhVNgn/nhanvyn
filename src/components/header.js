import * as React from "react"
import { Link } from "gatsby"
import "./header.css"
import { useRef, useEffect } from "react"




const Header = ({ experienceRef, aboutRef, skillRef, projectRef, contactRef }) => {
  const srollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: 'smooth'
    })
  }



  // useEffect(() => {
  //   console.log(experienceRef.current, 'header.js');
  // }, [])

  return (
    <div className="header">
      <nav className="navigationWrapper">
        <ul>
          <li onClick={() => srollToSection(aboutRef)}>
            About
          </li>

          <li onClick={() => srollToSection(experienceRef)}>
            Experience
          </li>

          <li onClick={() => srollToSection(skillRef)}>
            Skills
          </li>
          <li onClick={() => srollToSection(projectRef)}>
            Project
          </li>


          <li onClick={() => srollToSection(contactRef)}>
            Contact
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Header;