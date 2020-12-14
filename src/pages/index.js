import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroSection from '../components/HeroSection/HeroSection.component';
import WoodenLog from '../components/BetweenSectionWoodenLog/WoodenLog.component';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection/>
    <WoodenLog/>
    
  </Layout>
)

export default IndexPage

