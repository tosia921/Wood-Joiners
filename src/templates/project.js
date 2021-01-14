import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout';


const Project = ({data}) => {
    const RichContent = JSON.parse(data.contentfulProject.projectContent.raw);
    const options = {
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
            // [BLOCKS.EMBEDDED_ASSET]:  <img src={`https:${data.contentfulProject.projectContent.references.fluid.src}`}/>,
        },
    renderMark: {},
    }
    console.log(data)
    return (
        <Layout>
            
            {documentToReactComponents(RichContent, options)}
        </Layout>
    )
}

export default Project;

export const query = graphql`
    query($id: String!) {
        contentfulProject(id: {eq: $id}) {
                title
                projectContent  {
                    raw
                    references {
                            fluid {
                                    src
                                    
                                }
                        }
                    }
                }
            }
        

`