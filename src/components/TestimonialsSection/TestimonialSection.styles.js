import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

import WoodenBanner from '../../images/SectionBanners/sectionbanner4.png'

export const SectionContainer = styled.div`
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
    background-position:center;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;

`

export const BannerText = styled.h2`
    font-size: 3rem;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: rotate(8deg) translate(-50%,-35%);
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig}; 
    
`
export const StyledPtag = styled.p`
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};
    margin: 4rem 0;
    letter-spacing: 1px;
`

export const StyledCarousel = styled(Carousel)`
    width: 100%;
    height: 25rem;
    background-color: rgba(255,255,255,0.2);
    border-radius: 20px;
    margin-bottom: 4rem;
`

export const StyledCarouselItem = styled(Carousel.Item)`
   
`