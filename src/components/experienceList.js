import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { useEffect } from "react"
import "./experienceList.css"
import Experience from "./experience";




const ExperienceList = ({ experienceRef }) => {
  const data = useStaticQuery(graphql`
  {
    allExperiencesJson{
      edges{
        node{
          company,
          title,
          bulletList,
          timeRange,
          image{
            childImageSharp{
              gatsbyImageData
            }
          }
        }
      }
    }
  }
  `);
  const jobs = data.allExperiencesJson.edges;


  useEffect(() => {
    console.log(experienceRef.current, 'experienceList.js');
  }, [])

  return (
    <div className="experiencesList">
      <div ref={experienceRef} className="Experience">
        <h1>Experience</h1>
        <p>Where I worked</p>
      </div>



      {
        jobs.map(({ node: job }, index) => {
          const company = job.company;
          const title = job.title;
          const timeRange = job.timeRange;
          const bulletList = job.bulletList;
          const imageData = getImage(job.image);
          return (
            <div className="experienceWrapperWrapper" key={index}>
              <Experience
                company={company}
                title={title}
                timeRange={timeRange}
                bulletList={bulletList}
                imageData={imageData}

              />
            </div>
          )
        })
      }
    </div>
  )
};

export default ExperienceList;
