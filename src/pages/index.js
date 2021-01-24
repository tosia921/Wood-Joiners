import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";


import HeroSection from '../components/HeroSection/HeroSection.component';
import WoodenLog from '../components/BetweenSectionWoodenLog/WoodenLog.component';
import AboutUs from '../components/AboutSection/About.component';
import ProcessSection from '../components/ProcessSection/ProcessSection.component';
import TestimonialSection from '../components/TestimonialsSection/TestimonialSection.component';
import FeaturedProjectsSection from '../components/FeaturedProjectsSection/FeaturedProjectsSection.component';
import Contact from '../components/ContactSection/Contact.component';

const IndexPage = () => (
    <Layout>
      <SEO title="Home" />
      <HeroSection/>
      <WoodenLog/>
      <AboutUs/>
      <WoodenLog/>
      <ProcessSection/>
      <WoodenLog/>
      <TestimonialSection/>
      <WoodenLog/>
      <FeaturedProjectsSection/>
      <WoodenLog/>
      <Contact/>
    </Layout>
)
 
export default IndexPage

