import React from "react"

import {
  HeroTextContainer,
  StyledH1,
  StyledH2asH1,
  StyledH3,
  ButtonsContainer,
} from "./HeroText.styles"

import Button from "../Buttons/Button.component"

class HeroText extends React.Component {
  render() {
    const text1 = "FLOOR RENOVATION SPECIALIST'S"
    const text2 = "Sanding, Polishing, Staining"
    const text3 = "Bringing floors back to life since 2013"
    return (
      <HeroTextContainer>
        <StyledH1>{text1}</StyledH1>
        <StyledH2asH1>{text2}</StyledH2asH1>
        <StyledH3>{text3}</StyledH3>
        <ButtonsContainer>
          <Button text="Projects" primary="true" to="/projects" />
          <Button text="Contact" to="/contact" />
        </ButtonsContainer>
      </HeroTextContainer>
    )
  }
}

export default HeroText
