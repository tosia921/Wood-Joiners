import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutUs from '../components/AboutSection/About.component'


const About = () => (
  <Layout>
    <SEO title="about" />
    <AboutUs/>
  </Layout>
)

export default About
