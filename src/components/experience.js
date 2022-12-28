import * as React from "react"
import { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import "./experience.css"

const imgStyles = {
  width: '45px',
  height: '45px',
  border: '1px solid rgba(105, 100, 100, 0.3)',
  marginTop: '0.5%',
  marginLeft: '0.5%',
  marginBottom: '0.5%'
};

const Experience = ({ company, title, timeRange, bulletList, imageData }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="experienceSection">
      <div className="experienceWrapper" onClick={() => setShow(!show)}>
        <div className="experienceTab">
          <GatsbyImage image={imageData} alt="companyImage" style={imgStyles} />
          <div className="jobIntro">
            <h4>{company}</h4>
            <h5>{title}</h5>
          </div>
          <div className="timeAndArrow">
            <h4 className="timeRange">{timeRange}</h4>
            <div className="arrow"></div>
          </div>
        </div>
        <div className="experienceDropDown">
          {show &&
            <ul>
              {
                bulletList.map((value, index) => {
                  return (
                    <li key={index}>
                      {value}
                    </li>
                  )
                })
              }
            </ul>
          }

        </div>
      </div>
   

    </div>


  )
};

export default Experience;