import React from "react"
import {
  SectionContainer,
  SectionBanner,
  BannerText,
  StyledPtag,
  StyledCarousel,
  StyledCarouselItem,
  CustomerComment,
  CustomerName,
  RatedPeopleLogo,
  Stars,
  StarSVG,
  RatedPeopleContainer,
  RatedPeopleText,
  StyledPtag2,
} from "./TestimonialSection.styles"

//Animations
import { fadeInOutOnScroll } from "../../framerMotionAnimations/animation"
import { useScroll } from "../../framerMotionAnimations/useScroll"

const TestimonialSection = () => {
  const [element, controls] = useScroll()
  return (
    <SectionContainer
      variants={fadeInOutOnScroll}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <SectionBanner>
        <BannerText>WHAT PEOPLE SAY</BannerText>
      </SectionBanner>

      <StyledPtag>DON'T BELIEVE US, BELIEVE OUR CUSTOMERS</StyledPtag>

      <StyledCarousel>
        <StyledCarouselItem>
          <CustomerComment>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula aliquet odio, eu maximus dolor gravida eu. Cras luctus
            pharetra risus eu interdum.
          </CustomerComment>
          <CustomerName>Mark Johnson</CustomerName>
        </StyledCarouselItem>
        <StyledCarouselItem>
          <CustomerComment>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula aliquet odio, eu maximus dolor gravida eu. Cras luctus
            pharetra risus eu interdum.
          </CustomerComment>
          <CustomerName>John Smith</CustomerName>
        </StyledCarouselItem>
        <StyledCarouselItem>
          <CustomerComment>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula aliquet odio, eu maximus dolor gravida eu. Cras luctus
            pharetra risus eu interdum. In ultrices eros nec risus congue
            pulvinar a et quam.{" "}
          </CustomerComment>
          <CustomerName>Amy Wine</CustomerName>
        </StyledCarouselItem>
      </StyledCarousel>
    </SectionContainer>
  )
}
export default TestimonialSection
