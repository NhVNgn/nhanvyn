import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./about.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const avatarStyles = {
  maxWidth: '15vw',
  maxHeight: '18vw',
  borderRadius: '10px',

};

const downloadIconStyle = {
  marginRight: '4%',
}
const iconStyles = {
  width: '25px',
  height: '25px',
  borderRadius: '50%',
  color: 'var(--color-text)',

};

const About = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} className="AboutWrapper">
      <div className="About">
        <h1><span className="spanAbout">SUMMARY</span></h1>

        <div className="social-icons">
          <div className="github">
            <a href="https://github.com/NhVNgn">
              <FontAwesomeIcon icon={faGithubSquare} style={iconStyles} />
            </a>
          </div>
          <div className="linkedIn">
            <a href="https://www.linkedin.com/in/nhan-vy-nguyen-50635716a/">
              <FontAwesomeIcon icon={faLinkedin} style={iconStyles} />
            </a>
          </div>

        </div>
      </div>

      <div className="intro">
        <div className="introText">
          <h1>I'M NGUYEN NHAN VY</h1>
          <p> I am fourth year SFU Computer Science student, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <button className="downloadBt">
            <FontAwesomeIcon icon={faDownload} style={downloadIconStyle} />
            
            My Resume
          </button>
        </div>
        <div className="introImg">
          <StaticImage src="../images/avatar.jpg" style={avatarStyles} alt="My picture" />


        </div>
      </div>
    </div>
  )
};

export default About;