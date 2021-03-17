import React from "react"
import pic1 from "../../images/HeroSliderImages/pic1.jpg"

import {
  SectionContainer,
  SectionBanner,
  BannerText,
  GridContainer,
  TextArea1,
  TextArea2,
  StyledH3,
  StyledText,
  StyledImg1,
  StyledImg2,
} from "./About.styles"

//Animations
import { fadeInOutOnScroll } from "../../framerMotionAnimations/animation"
import { useScroll } from "../../framerMotionAnimations/useScroll"

const AboutUs = () => {
  const [element, controls] = useScroll()
  return (
    <SectionContainer
      variants={fadeInOutOnScroll}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <SectionBanner>
        <BannerText>ABOUT US</BannerText>
      </SectionBanner>
      <GridContainer>
        <TextArea1>
          <StyledH3>WE'VE BEEN HERE SINCE 2013</StyledH3>
          <StyledText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
            typesetting.Ipsum.
          </StyledText>
        </TextArea1>
        <StyledImg1 src={pic1} alt="bal bla" />
        <StyledImg2 src={pic1} alt="bla blae" />
        <TextArea2>
          <StyledH3>ALWAYS CUSTOMER FOCUSED</StyledH3>
          <StyledText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
            typesetting.Ipsum.
          </StyledText>
        </TextArea2>
      </GridContainer>
    </SectionContainer>
  )
}

export default AboutUs
