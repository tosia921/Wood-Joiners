import React from 'react'
import { ProjectsPageWrapper, SearchContainer, SearchList,SearchItem, ProjectsContainer } from './ProjectsPage.styles'

const ProjectsPage = () => {
    return (
        <ProjectsPageWrapper>
            <SearchContainer>
                <SearchList>
                    <SearchItem>All</SearchItem>
                    <SearchItem>New Floors</SearchItem>
                    <SearchItem>Renovated Floors</SearchItem>
                    <SearchItem>Stairs</SearchItem>
                    <SearchItem>Other</SearchItem>
                </SearchList>
            </SearchContainer>
            <ProjectsContainer>
            
            </ProjectsContainer>
        </ProjectsPageWrapper>
    )
}

export default ProjectsPage;