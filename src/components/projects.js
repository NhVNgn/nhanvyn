import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import "./projects.css"


const imgStyles = {
  maxwidth: '27rem',
  height: '30rem',
};

const gradientStyles = {
  position: 'absolute',
  inset: '0 0 0 0',
  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.45), black)',
}


const Projects = ({ projectRef }) => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson{
        edges{
          node{
            id,
            title,
            slug,
            url,
            description,
            tag,
            image{
              publicURL,
              childImageSharp{
                gatsbyImageData
              }
            }
          }
        }
        
      }
    }
  `);

  const projects = data.allProjectsJson.edges;


  return (
    <div ref={projectRef} className="projectSection">
      <div className="Project">
        <h1> Projects</h1>
      </div>



      <div className="gridContainer">
        {/* <div className="projectWrapper">
          <div className="projectImage">
            <StaticImage src="../images/sea.jpg" alt="project image" style={imgStyles} />
            <div className="Gradient" style={gradientStyles} />

            <div className="projectContent">
              <h2>Project title</h2>
              <p> lorem ipsum dolor sit amet consectetuer adipiscing elit sed do eiusmod tempor incididunt ut labore </p>

              <div className="tagContainer">
                <div className="tag">
                  <h4>inside tag1</h4>
                </div>

                <div className="tag">
                  <h4>inside tag1</h4>
                </div>
                <div className="tag">
                  <h4>inside tag1</h4>
                </div>
                <div className="tag">
                  <h4>inside tag1</h4>
                </div>


              </div>
            </div>
          </div>
        </div> */}
        {
          projects.map(({ node: project }, index) => {
            const title = project.title;
            const description = project.description;
            const imageData = getImage(project.image);
            const tags = project.tag;
            return (
              <div className="projectWrapper" key={title}>
                <div className="projectImage">
                  {/* <StaticImage src="../images/sea.jpg" alt="project image" style={imgStyles} /> */}

                  <GatsbyImage image={imageData} alt="project image" style={imgStyles} />
                  <div className="Gradient" style={gradientStyles} />

                  <div className="projectContent">
                    <h2>{title}</h2>
                    <p> {description} </p>

                    <div className="tagContainer">
                      {/* <div className="tag">
                        <h4>inside tag1</h4>
                      </div>

                      <div className="tag">
                        <h4>inside tag1</h4>
                      </div>
                      <div className="tag">
                        <h4>inside tag1</h4>
                      </div>
                      <div className="tag">
                        <h4>inside tag1</h4>
                      </div> */}
                      {
                        tags.map((t, t_index) => {
                          return (
                            <div className="tag" key={t_index}>
                              <h4>{t}</h4>
                            </div>
                          )
                        })
                      }

                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }




      </div>









    </div>


  )
};

export default Projects;