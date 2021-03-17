import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Contact from "../components/ContactSection/Contact.component"
//Animations
import { pageAnimation } from "../framerMotionAnimations/animation"
import { motion } from "framer-motion"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact MJ Joiners" />
      <motion.div variants={pageAnimation} initial="hidden" animate="show">
        <Contact />
      </motion.div>
    </Layout>
  )
}

export default ContactPage
