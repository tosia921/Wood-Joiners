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
          allSanityProject(filter: {featured: {eq: true}}, limit: 3) {
            edges {
              node {
                id
                slug {
                  current
                }
                title
                featuredimage {
                  asset {
                    fluid(maxWidth: 300) {
                      src
                  }
            }
            alt
          }
        }
      }
    }
  }
`}
    render={data => (
      <ProjectsContainer>
        {data.allSanityProject.edges.map(edge => (
          <ProjectDiv
            key={edge.node.id}
            onClick={() => navigate(`/projects/${edge.node.slug.current}`)}
            style={{
              backgroundImage: `url(${edge.node.featuredimage.asset.fluid.src})`,
            }}
            title={edge.node.featuredimage.alt}
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
