import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProjectList from '../components/ProjectsList/ProjectList.component';
import ProjectsFilter from "../components/ProjectsFilter/ProjectsFilter.component";

const Projects = ({ data, pageContext }) => {

  const projects = data.allSanityProject.edges;

  return (
    <Layout>
      <SEO title="projects" />
      <ProjectsFilter activeCategory={pageContext.category}/>
      <ProjectList projects={projects}/>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query ProjectQuery ($category: String){
    allSanityProject(filter: {categories: {Category: {eq: $category}}}) {
    edges {
      node {
        title
        slug {
          current
        }
        featuredimage {
          asset {
            fixed(width: 300, height: 300) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        id
        categories {
          Category
        }
      }
    }
  }
}
`