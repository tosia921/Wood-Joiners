import React from "react";
import { graphql, navigate, StaticQuery } from "gatsby";
import {
  ProjectsContainer,
  ProjectDiv,
  ProjectTitle,
  TitleDiv,
  StyledImg
} from "./FeaturedProject.styles";


// style={{
//   backgroundImage: `url(${edge.node.featuredimage.asset.fluid.src})`,
// }}

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedProjectData {
        allSanityProject(filter: {featured: {eq: true}, publishedAt: {}}, limit: 3, sort: {order: DESC, fields: _createdAt}) {
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
                      ...GatsbySanityImageFluid
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
            title={edge.node.featuredimage.alt}
          >
            <StyledImg fluid={edge.node.featuredimage.asset.fluid}/>
            <TitleDiv>
              <ProjectTitle>{edge.node.title}</ProjectTitle>
            </TitleDiv>
          </ProjectDiv>
        ))}
      </ProjectsContainer>
    )}
  />
)

