import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProjectsPage from "../components/ProjectsPage/ProjectsPage.component"

const Projects = () => (
  <Layout>
    <SEO title="projects" />
    <ProjectsPage />
  </Layout>
)

export default Projects
