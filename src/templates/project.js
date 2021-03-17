import React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

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
  const { projectContent } = data.contentfulProject

  const Bold = ({ children }) => <span className="bold">{children}</span>
  const Italic = ({ children }) => <span className="italic">{children}</span>
  const Underline = ({ children }) => (
    <span className="underline">{children}</span>
  )

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
      [MARKS.UNDERLINE]: text => <Underline>{text}</Underline>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <StyledPTag>{children}</StyledPTag>
      ),
      [BLOCKS.HEADING_1]: (node, children) => <StyledH1>{children}</StyledH1>,
      [BLOCKS.HEADING_2]: (node, children) => <StyledH2>{children}</StyledH2>,
      [BLOCKS.HEADING_3]: (node, children) => <StyledH3>{children}</StyledH3>,
      [BLOCKS.HEADING_4]: (node, children) => <StyledH4>{children}</StyledH4>,
      [BLOCKS.HEADING_5]: (node, children) => <StyledH5>{children}</StyledH5>,
      [BLOCKS.HEADING_6]: (node, children) => <StyledH6>{children}</StyledH6>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <StyledImg
            src={`https:${node.data.target.fluid.src}`}
            alt={node.data.target.description}
          />
        )
      },
    },
  }

  return (
    <div>
      <Layout>{renderRichText(projectContent, options)}</Layout>
    </div>
  )
}

export default ProjectTemplate

export const query = graphql`
  query($id: String!) {
    contentfulProject(id: { eq: $id }) {
      contentful_id
      title
      slug
      projectContent {
        raw
        references {
          description
          ... on ContentfulAsset {
            contentful_id
            __typename
            fluid(maxWidth: 1000, quality: 85) {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
