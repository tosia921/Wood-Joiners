import React, { useState } from 'react'
// import { useStaticQuery, graphql } from "gatsby"

import Projects from './Projects/Projects.component';

import { ProjectsPageWrapper, SearchContainer, SearchOptions,SearchButton, ProjectsContainer } from './ProjectsPage.styles'


const ProjectsPage = () => {

    let [ searchChoice, updateSearchChoice ] = useState('All');

    return (
        <ProjectsPageWrapper>
            <SearchContainer>
                <SearchOptions>
                    <SearchButton onClick={ () => updateSearchChoice(searchChoice = 'All') }>All</SearchButton>
                    <SearchButton onClick={ () => updateSearchChoice(searchChoice = 'New Floors')}>New Floors</SearchButton>
                    <SearchButton onClick={ () => updateSearchChoice(searchChoice = 'Renovated Floors')}>Renovated Floors</SearchButton>
                    <SearchButton onClick={ () => updateSearchChoice(searchChoice = 'Stairs')}>Stairs</SearchButton>
                    <SearchButton onClick={ () => updateSearchChoice(searchChoice = 'Other')}>Other</SearchButton>
                </SearchOptions>
            </SearchContainer>
            <ProjectsContainer>
                <Projects searchChoice={searchChoice}/>
            </ProjectsContainer>
            
        </ProjectsPageWrapper>
    )
}

export default ProjectsPage;
