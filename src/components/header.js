import * as React from "react"
import { Link } from "gatsby"
import "./header.css"


const Header = ({ siteTitle }) => (
  <div className="header">
    <h1
      className="TextLogo"
      to="/"
    >
      {siteTitle}
    </h1>
    <nav className="navigationWrapper">
      <ul className="navigationList">
        <li>
          <Link className="navLink" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/experience">
            Experience
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/resume">
            Resume
          </Link>
        </li>

        <li>
          <Link className="navLink" to="/contact">
            Contact
          </Link>
        </li>

      </ul>
    </nav>
  </div>
)

export default Header
