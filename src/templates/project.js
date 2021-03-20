import React from "react";
import { graphql } from "gatsby";

import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import "./project.styles.css"

import Layout from "../components/layout"
import BlockContent from '@sanity/block-content-to-react';


import {StyledDatePosted, StyledTitle, PageContainer } from "./project.styles"

const sanityConfig = {projectId: 'kwb289yk', dataset: 'production'}

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    addimage: props => {
      const fluidProps = getFluidGatsbyImage(props.node.asset, {maxWidth: 1024}, sanityConfig);

      return <Img className ='Img-styles' fluid={fluidProps} />
    },
  },
};

function ProjectTemplate({ data }) {
 
  const { title, _rawBody, _createdAt} = data.sanityProject

  return (
    <Layout>
      <PageContainer>
        <StyledTitle>{title}</StyledTitle>
        <div className='line-breaker'/>
        <BlockContent blocks={_rawBody} serializers={serializers} />
        <StyledDatePosted>{_createdAt}</StyledDatePosted>
      </PageContainer>
    </Layout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query($id: String!) {
    sanityProject(id: {eq: $id}) {
      _createdAt(formatString: "DD/MM/Y")
      _rawBody(resolveReferences: {maxDepth: 10})
      title
    }
  }
`
