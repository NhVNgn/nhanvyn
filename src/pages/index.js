import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import About from '../components/about'
import Projects from '../components/projects'
import Experience from "../components/experience"
import ExperienceList from "../components/experienceList"
import Skills from "../components/skills"
import Contact from "../components/contact"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"
import { useRef } from "react"


const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const aboutRef = useRef(null);
  const experienceListRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <React.Fragment>
      <Header
        experienceRef={experienceListRef}
        aboutRef={aboutRef}
        skillRef={skillRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <Layout>
        <About aboutRef={aboutRef} />
        <ExperienceList experienceRef={experienceListRef} />
        <Skills skillRef={skillRef} />
        <Projects  projectRef={projectRef}/>
        <Contact contactRef={contactRef}/>
      </Layout>
    </React.Fragment>

  )
};



export default IndexPage
