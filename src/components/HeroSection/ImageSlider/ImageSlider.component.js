import React from "react"

import { StyledImageSlider } from "./ImageSlider.styles"

import { Carousel } from "react-bootstrap"

import HeroText from "../HeroText/HeroText.component"

import pic1 from "../../../images/HeroSliderImages/pic1.jpg"
import pic2 from "../../../images/HeroSliderImages/pic2.jpg"
import pic3 from "../../../images/HeroSliderImages/pic3.jpg"

//Animations
import { pageAnimation } from "../../../framerMotionAnimations/animation"

const ImageSlider = () => {
  return (
    <StyledImageSlider variants={pageAnimation} initial="hidden" animate="show">
      <Carousel style={{ "border-radius": "10px", overflow: "hidden" }}>
        <Carousel.Item>
          <img
            style={{ height: "42rem" }}
            className="d-block w-100"
            src={pic1}
            alt="This is first Slider"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "42rem" }}
            className="d-block w-100"
            src={pic2}
            alt="This is first Slider"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "42rem" }}
            className="d-block w-100"
            src={pic3}
            alt="This is first Slider"
          />
        </Carousel.Item>
      </Carousel>
      <HeroText />
    </StyledImageSlider>
  )
}

export default ImageSlider
