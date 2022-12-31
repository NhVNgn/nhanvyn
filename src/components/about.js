import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./about.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const avatarStyles = {
  maxWidth: '15vw',
  height: '19vw',
  borderRadius: '10px',

};

const downloadIconStyle = {
  marginRight: '4%',
}
const iconStyles = {
  width: '2.5vw',
  height: '2.5vw',
  borderRadius: '50%',
  color: 'var(--color-text)',

};

const About = ({ aboutRef }) => {

  const openResume = () => {
    window.open("https://github.com/NhVNgn/files/blob/main/resume-spring-2023.pdf?raw=true", "_blank");
  }

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
          <h1>NGUYEN NHAN VY</h1>
          <p> I am a fourth year SFU Computer Science student, my area of interest includes full stack development and dev operations. I have experience with backend development using Flask and SpringBoot. I also taught myself frontend tools likes ReactJS and Vue which I have combined with Firebase to build some interesting projects, please check them out at the project section!
          </p>
          <button className="downloadBt" onClick={openResume} >
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