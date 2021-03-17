import React from "react"
import { StyledLog, Wrapper } from "./WoodenLog.styles"
//Animations
import { fadeInOutOnScroll } from "../../framerMotionAnimations/animation"
import { useScroll } from "../../framerMotionAnimations/useScroll"

const WoodenLog = () => {
  const [element, controls] = useScroll()
  return (
    <Wrapper
      variants={fadeInOutOnScroll}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <StyledLog />
    </Wrapper>
  )
}

export default WoodenLog
