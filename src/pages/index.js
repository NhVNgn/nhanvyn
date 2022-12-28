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
const IndexPage = () => (
  <Layout>
    <About />
    <ExperienceList />
    <Skills/>
    <Projects />
    <Contact/>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
