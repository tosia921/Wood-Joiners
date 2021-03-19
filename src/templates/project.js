import React from "react";
import { graphql } from "gatsby";

import Img from 'gatsby-image'
import "./project.styles.css"
// import { renderRichText } from "gatsby-source-contentful/rich-text"
// import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import Layout from "../components/layout"
import BlockContent from '@sanity/block-content-to-react';


// import {
//   StyledImg,
//   StyledPTag,
//   StyledH1,
//   StyledH2,
//   StyledH3,
//   StyledH4,
//   StyledH5,
//   StyledH6,
// } from "./project.styles"
// import { serializers } from "@sanity/block-content-to-react/lib/targets/dom";

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

function ProjectTemplate({ data }) {
 
  const { title, slug, featuredimage, _rawBody, asset } = data.sanityProject

 

  return (
    <div>
      <Layout>
          <BlockContent blocks={_rawBody} serializers={serializers} />
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
      _rawBody(resolveReferences: {maxDepth: 10})
      title
      slug {
        current
      }
      featuredimage {
        asset {
          fluid(maxWidth: 400) {
          ...GatsbySanityImageFluid
          }
        }
      alt
      }
    }
  }
`
