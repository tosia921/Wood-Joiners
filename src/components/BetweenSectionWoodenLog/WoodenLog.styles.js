import styled from "styled-components"
import WoodImg from "../../images/svgs/woodSVG.inline.svg"
//Animations
import { motion } from "framer-motion"

export const Wrapper = styled(motion.div)``

export const StyledLog = styled(WoodImg)`
  width: 70vw;
  height: 10rem;
  position: relative;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 7rem;
  filter: drop-shadow(0px 10px 13px -7px #000000);

  @media screen and (max-width: 1024px) {
    margin-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: -1rem;
  }
`
