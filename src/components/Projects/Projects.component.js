import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"

import { ProjectDiv, TitleDiv, ProjectTitle } from "./Projects.styles"

//Animations
import { item } from "../../framerMotionAnimations/animation"

const Projects = ({ searchChoice }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulProject(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            contentful_id
            featuredImage {
              description
              fluid(maxWidth: 300, quality: 85) {
                src
              }
            }
            slug
            title
            projectType {
              typeName
            }
            createdAt
          }
        }
      }
    }
  `)
  return searchChoice !== "All"
    ? data.allContentfulProject.edges
        .filter(edge => edge.node.projectType.typeName === searchChoice)
        .map(edge => (
          <ProjectDiv
            variants={item}
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
        ))
    : data.allContentfulProject.edges.map(edge => (
        <ProjectDiv
          variants={item}
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
      ))
}

export default Projects
