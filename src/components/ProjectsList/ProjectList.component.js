import React from 'react'

import { ProjectGridStyles, ProjectStyles, ProjectTitle, ProjectCategory, ProjectImage, ProjectLink} from './ProjectList.styles';

const SingleProject = ({ project }) => {
    return (
        <ProjectStyles>
            <ProjectLink to={`/projects/${project.node.slug.current}`}>
                <ProjectTitle>{project.node.title}</ProjectTitle>
            </ProjectLink>
            <ProjectCategory>{project.node.categories.Category}</ProjectCategory>
            <ProjectImage fluid={project.node.featuredimage.asset.fluid} alt={project.node.title}/>
            
        </ProjectStyles>
    )
}

const ProjectList = ({ projects }) => {
    return (
        <ProjectGridStyles>
            {projects.map((project) => (
                <SingleProject key={project.node.id} project={project}/>
            ))}
        </ProjectGridStyles>
    )
}

export default ProjectList;
