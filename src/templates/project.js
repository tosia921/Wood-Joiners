import React from 'react'
import { graphql } from 'gatsby';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

import Layout from '../components/layout'


function ProjectTemplate({ data }) {
  const {projectContent} = data.contentfulProject
  console.log(projectContent)

  const options = {
    renderMark: {},
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
            <img src={`https:${node.data.target.fixed.src}`}/>
        )
      },
    },
  }

  return (
    <div>
      <Layout>
      {renderRichText(projectContent, options)}
      </Layout>
    </div>
  )
}

export default ProjectTemplate

export const query = graphql`
  query($id: String!) {
    contentfulProject(id: {eq: $id}) {
                contentful_id
                title
                slug
              projectContent {           
                raw
                references {
                  ... on ContentfulAsset {
                    contentful_id
                    __typename
                    fixed(width: 1600) {
                      width
                      height
                      src
                      srcSet
                    }
                  }
                }
              }
            }
          }
`