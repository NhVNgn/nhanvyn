import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import "./experienceList.css"
import Experience from "./experience";


const jobs = [
  {
    "company": "Microchip Technology - Microsemi",
    "title": "Database Engineer",
    "bulletList": [
      "web-app, lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt utwadwadawdwdwadawdawdwadwdawd", "wadkawodkawd", "wadawdadawdawd"
    ],
    "timeRange": "Jan 2022 - May 2022",
    "imageUrl": "../../static/microsemi.jpg"

  },
  {
    "company": "SEEDA",
    "title": "Educational Project Competitor",
    "bulletList": [
      "awdawda", "web-app, lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt utwadwadawdwdwadawdawdwadwdawd", "wadawdadawdawd"
    ],
    "timeRange": "May 2019 - Dec 2019",
    "imageUrl": "../../static/rippen.jpg"
  },
  {
    "company": "FIC",
    "title": "IT support - College Student Leadership program",
    "bulletList": [
      "awdawda", "wadkawodkawd", "wadawdadawdawd"
    ],
    "timeRange": "May 2019 - Dec 2019",
    "imageUrl": "../../static/fic.jpg"

  }
];



const ExperienceList = () => {


  return (
    <div>
      <h1>Experience</h1>
      {
        jobs.map((job, index) => {
          const company = job.company;
          const title = job.title;
          const timeRange = job.timeRange;
          const bulletList = job.bulletList;
          const imageUrl = job.imageUrl;
          return (
            <div className="experienceWrapperWrapper" key={index}>
              <Experience
                company={company}
                title={title}
                timeRange={timeRange}
                bulletList={bulletList}
                imageUrl={imageUrl}

              />
            </div>
          )
        })
      }
    </div>
  )
};

export default ExperienceList;
