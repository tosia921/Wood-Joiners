import React, { useState } from "react"
import Projects from "../Projects/Projects.component"
import {
  ProjectsPageWrapper,
  SearchContainer,
  SearchOptions,
  SearchButton,
  ProjectsContainer,
} from "./ProjectsPage.styles"
//Animations
import { container } from "../../framerMotionAnimations/animation"

const ProjectsPage = () => {
  let [searchChoice, updateSearchChoice] = useState("All")
  console.log(searchChoice)
  return (
    <ProjectsPageWrapper>
      <SearchContainer>
        <SearchOptions>
          <SearchButton
            onClick={() => updateSearchChoice((searchChoice = "All"))}
            
          >
            All
          </SearchButton>
          <SearchButton
            onClick={() => updateSearchChoice((searchChoice = "New Floors"))}
          >
            New Floors
          </SearchButton>
          <SearchButton
            onClick={() =>
              updateSearchChoice((searchChoice = "Renovated Floors"))
            }
          >
            Renovated Floors
          </SearchButton>
          <SearchButton
            onClick={() => updateSearchChoice((searchChoice = "Stairs"))}
          >
            Stairs
          </SearchButton>
          <SearchButton
            onClick={() => updateSearchChoice((searchChoice = "Other"))}
          >
            Other
          </SearchButton>
        </SearchOptions>
      </SearchContainer>
      <ProjectsContainer variants={container} initial="hidden" animate="show">
        <Projects searchChoice={searchChoice} />
      </ProjectsContainer>
    </ProjectsPageWrapper>
  )
}

export default ProjectsPage
