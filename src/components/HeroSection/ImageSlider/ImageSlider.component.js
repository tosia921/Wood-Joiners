import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
//styles
import { StyledImageSlider } from "./ImageSlider.styles"
// bootstrao carousel
import { Carousel } from "react-bootstrap"
// isnide slider text component
import HeroText from "../HeroText/HeroText.component"
//Animations
import { pageAnimation } from "../../../framerMotionAnimations/animation"

const ImageSlider = () => {
  
  const data = useStaticQuery(graphql`
    query SliderImagesQuery {
      image1: file(relativePath: { eq: "slider1.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1400){
            ...GatsbyImageSharpFluid
          }
        } 
      }
      image2: file(relativePath: { eq: "slider2.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        } 
      }
      image3: file(relativePath: { eq: "slider3.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        } 
      }
    }
`)

const SliderImage1 = data.image1.childImageSharp.fluid
const SliderImage2 = data.image2.childImageSharp.fluid
const SliderImage3 = data.image3.childImageSharp.fluid

  return (
    <StyledImageSlider variants={pageAnimation} initial="hidden" animate="show">
      <Carousel style={{ "borderRadius": "10px", overflow: "hidden" }}>
        <Carousel.Item>
          <Img
            fluid={SliderImage1}
            style={{ height: "42rem" }}
            className="d-block w-100"
            alt="This is first Slider"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Img
            fluid={SliderImage2}
            style={{ height: "42rem" }}
            className="d-block w-100"
            alt="This is first Slider"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Img
            fluid={SliderImage3}
            style={{ height: "42rem" }}
            className="d-block w-100"
            alt="This is first Slider"
          />
        </Carousel.Item>
      </Carousel>
      <HeroText />
    </StyledImageSlider>
  )
}

export default ImageSlider
