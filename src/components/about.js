import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./about.css"
const avatarStyles = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
};


const iconStyles = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
};

const About = () => {
  return (
    <div className="intro">
      <div className="introText">
        <h1> Welcome to my blog! </h1>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p> I am Vy Nhan Nguyen, fourth year SFU Computer Science student, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
      </div>
      <div className="introImg">
        <StaticImage src="../images/avatar.jpg" style={avatarStyles} alt="My picture" />

        <div className="social-icons">
          <a href="https://github.com/NhVNgn">
            <StaticImage src="../images/github-mark.png" style={iconStyles} alt="My picture" />
          </a>
          <a href="https://www.linkedin.com/in/nhan-vy-nguyen-50635716a/">
            <StaticImage src="../images/linkedIn-icon.png" style={iconStyles} alt="My picture" />
          </a>
        </div>
      </div>


    </div>
  )
};

export default About;