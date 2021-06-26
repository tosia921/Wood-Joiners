import styled from "styled-components"
import { Carousel } from "react-bootstrap"

import WoodenBanner from "../../images/SectionBanners/sectionbanner4.png"

//Animations
import { motion } from "framer-motion"

export const SectionContainer = styled(motion.section)`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SectionBanner = styled.div`
  height: 15rem;
  width: 40rem;
  margin-top: 5rem;
  background-image: url(${WoodenBanner});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
`

export const BannerText = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(8deg) translate(-50%, -35%);
  color: ${({ theme }) => theme.PrimaryTextColor};
  text-shadow: ${({ theme }) => theme.TextShadowBig};
`
export const StyledPtag = styled.p`
  font-size: 4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.PrimaryTextColor};
  text-shadow: ${({ theme }) => theme.TextShadowBig};
  margin: 4rem 0;
  letter-spacing: 1px;
  text-align: center;
`

export const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 25rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  margin-bottom: 4rem;
  position: relative;
`

export const StyledCarouselItem = styled(Carousel.Item)`
  position: relative;
  min-height: 100%;
  margin-top: 7rem;
`

export const CustomerComment = styled.p`
  width: 70%;
  font-size: 2rem;
  color: ${({ theme }) => theme.PrimaryTextColor};
  text-shadow: ${({ theme }) => theme.TextShadowBig};
  margin-left: auto;
  margin-right: auto;
`

export const CustomerName = styled.p`
  text-align: right;
  width: 75%;
  /* margin-top: -1rem; */
  font-size: 3rem;
  color: ${({ theme }) => theme.PrimaryTextColor};
  text-shadow: ${({ theme }) => theme.TextShadowBig};
`
