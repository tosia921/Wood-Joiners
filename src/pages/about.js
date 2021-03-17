import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutUs from "../components/AboutSection/About.component"

//Animations
import { motion } from "framer-motion"
import { pageAnimation } from "../framerMotionAnimations/animation"

const About = () => (
  <Layout>
    <SEO title="about" />
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <AboutUs />
    </motion.div>
  </Layout>
)

export default About
