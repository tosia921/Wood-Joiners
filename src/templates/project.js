import React from "react";
import { graphql } from "gatsby";
import Img from 'gatsby-image';
// import { renderRichText } from "gatsby-source-contentful/rich-text"
// import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import Layout from "../components/layout"

import "./project.styles.css"
import {
  StyledImg,
  StyledPTag,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
} from "./project.styles"

function ProjectTemplate({ data }) {
 
  const { title, slug, featuredimage } = data.sanityProject

  return (
    <div>
      <Layout>
        <StyledH1>{title}</StyledH1>
        <StyledH1>{slug.current}</StyledH1>
        <Img fluid={featuredimage.asset.fluid}/>
      </Layout>
    </div>
  )
}

export default ProjectTemplate

export const query = graphql`
  query($id: String!) {
    sanityProject(id: {eq: $id}) {
      _createdAt(formatString: "DD/MM/Y")
      id
      featured
      _rawBody
      title
      slug {
        current
      }
      featuredimage {
        asset {
          fluid(maxWidth: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
