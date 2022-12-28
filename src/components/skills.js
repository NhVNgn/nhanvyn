import * as React from "react"
import { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import "./skills.css"

const Skills = () => {


  return (

    <div className="SkillSection">
      <div className="Skills">
        <h1>Skills</h1>
      </div>

      <div className="skillBoardWrapper">
        <div className="board">
          <div className="contentWrapper">
            <h4>
              Programming Languages
            </h4>
            <ul>
              <li>C/C++</li>
              <li>C/C++</li>
              <li>C/C++</li>
            </ul>

            <h4>
              Frameworks
            </h4>
            <ul>
              <li>C/C++</li>
              <li>C/C++</li>
              <li>C/C++</li>
            </ul>

          </div>



        </div>
        <div className="board">
          <div className="contentWrapper">
            <h4>
              Programming Languages
            </h4>
            <ul>
              <li>C/C++</li>
              <li>C/C++</li>
              <li>C/C++</li>
            </ul>

            <h4>
              Frameworks
            </h4>
            <ul>
              <li>C/C++</li>
              <li>C/C++</li>
              <li>C/C++</li>
            </ul>

          </div>



        </div>
        <div className="board">
          <div className="contentWrapper">
            <h4>
              Programming Languages
            </h4>
            <ul>
              <li>C/C++</li>
              <li>C/C++</li>
              <li>C/C++</li>
            </ul>

            <h4>
              Frameworks
            </h4>
            <ul>
              <li>C/C++</li>
              <li>C/C++</li>
              <li>C/C++</li>
            </ul>

          </div>



        </div>



      </div>

    </div>
  )
};

export default Skills;