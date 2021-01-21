// SectionContainer, SectionBanner, BannerText, GridContainer, TextArea, StyledH3, StyledText

import styled from 'styled-components';
import AboutUsBanner from '../../images/SectionBanners/sectionbanner1.png'

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SectionBanner = styled.div`
  background-image: url(${AboutUsBanner});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 20rem;
  width: 40rem;
  position: relative;
`

export const BannerText = styled.h2`
  font-size: 3.3rem;
  color: ${({ theme }) => theme.PrimaryTextColor};
  text-shadow: ${({ theme }) => theme.TextShadowBig};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -82%);
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem 2rem;
  height: fit-content;
  justify-items: center;
  align-items: center;

  grid-template-areas:
    "textArea1 StyledImg1"
    "StyledImg2 textArea2";

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "textArea1" 
      "StyledImg1"
      "textArea2" 
      "StyledImg2";
    }
 

`

export const TextArea1 = styled.div`
  grid-area: textArea1;
`
export const TextArea2 = styled.div`
  grid-area: textArea2;
`

export const StyledH3 = styled.h3`
  font-size: 4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.PrimaryTextColor};
  text-shadow: ${({ theme }) => theme.TextShadowBig}; 

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const StyledText = styled.p`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.PrimaryTextColor};
  text-shadow: ${({ theme }) => theme.TextShadow};
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const StyledImg1 = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  grid-area: StyledImg1;
  border: solid 2px white;
`

export const StyledImg2 = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  grid-area: StyledImg2;
  border: solid 2px white;
`
