import React from "react"
import { useStaticQuery, graphql } from "gatsby";



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

  const data = useStaticQuery(graphql`
    query AboutUsImagesQuery {
      image1: file(relativePath: { eq: "AboutUsImage1.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1000){
            ...GatsbyImageSharpFluid
          }
        } 
      }
      image2: file(relativePath: { eq: "AboutUsImage2.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        } 
      }
    }
`)

const AboutUsImage1 = data.image1.childImageSharp.fluid
const AboutUsImage2 = data.image2.childImageSharp.fluid

console.log(AboutUsImage1, AboutUsImage2)

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
        <StyledImg1 fluid={AboutUsImage1} alt="bal bla" />
        <StyledImg2 fluid={AboutUsImage2} alt="bla blae" />
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
