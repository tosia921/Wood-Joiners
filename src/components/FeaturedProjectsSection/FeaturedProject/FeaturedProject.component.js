import React from "react"
import { graphql, navigate, StaticQuery } from "gatsby"
import {
  ProjectsContainer,
  ProjectDiv,
  ProjectTitle,
  TitleDiv,
} from "./FeaturedProject.styles"

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedProjectData {
        allContentfulProject(limit: 3, filter: { featured: { eq: true } }) {
          edges {
            node {
              id
              featuredImage {
                description
                fluid(maxWidth: 300, quality: 85) {
                  src
                  ...GatsbyContentfulFluid
                }
              }
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <ProjectsContainer>
        {data.allContentfulProject.edges.map(edge => (
          <ProjectDiv
            key={edge.node.id}
            onClick={() => navigate(`/projects/${edge.node.slug}`)}
            style={{
              backgroundImage: `url(${edge.node.featuredImage.fluid.src})`,
            }}
            title={edge.node.featuredImage.description}
          >
            <TitleDiv>
              <ProjectTitle>{edge.node.title}</ProjectTitle>
            </TitleDiv>
          </ProjectDiv>
        ))}
      </ProjectsContainer>
    )}
  />
)
