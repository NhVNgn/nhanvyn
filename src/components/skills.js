import * as React from "react"
import { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import "./skills.css"

const Skills = ({ skillRef }) => {


  return (

    <div className="SkillSection">
      <div ref={skillRef} className="Skills">
        <h1>Skills</h1>
        <p>What I learned</p>
      </div>

      <div className="skillBoardWrapper">
        <div className="board">
          <div className="contentWrapper">
            <h4>
              Programming Languages
            </h4>
            <ul>
              <li>C/C++, C#, MySQL</li>
              <li>Python, Java, Rust</li>
              <li>HTML, CSS, JavaScript</li>
            </ul>

            <h4>
              Frameworks
            </h4>
            <ul>
              <li>Node.JS</li>
              <li>ReactJS, Gatsby</li>
              <li>Flask, SpringBoot</li>
            </ul>

          </div>



        </div>
        <div className="board">
          <div className="contentWrapper">
            <h4>
              Database
            </h4>
            <ul>
              <li>Firebase</li>
              <li>MySQL</li>
              <li>JQL</li>
            </ul>

            <h4>
              Version control
            </h4>
            <ul>
              <li>Jira</li>
              <li>Bitbucket</li>
              <li>Github, GitLab</li>
            </ul>

          </div>



        </div>
        <div className="board">
          <div className="contentWrapper">
            <h4>
              Knowledge
            </h4>
            <ul>
              <li>OOP, Design Pattern</li>
              <li>Multithreading</li>
              <li>Networking</li>
            </ul>

            <h4>
              IDE/Compiler
            </h4>
            <ul>
              <li>VSCode</li>
              <li>Visual Studio</li>
              <li>Android Studio</li>
              <li>IntelliJ, Eclipse</li>
            </ul>

          </div>



        </div>



      </div>

    </div>
  )
};

export default Skills;