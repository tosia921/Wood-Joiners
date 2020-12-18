import styled from 'styled-components';
import { Link } from 'gatsby';

import ProcessSectionBanner from '../../images/SectionBanners/sectionbanner3.png';


export const ProcessSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
`

export const SectionBanner = styled.div`
    background-image: url(${ProcessSectionBanner});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 20rem;
    width: 30rem;
    position: relative;
`

export const BannerText = styled.h2`
    font-size: 3.3rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -25%);
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem 2rem;
    height: fit-content;
    grid-template-areas:
        "Step1 Step2"
        "Step3 Step4";

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
            "Step1" 
            "Step2"
            "Step3" 
            "Step4";
    }
        justify-items: center;
        align-items: center;
`

// -----------------------------------------------

export const Step1 = styled.div`
    max-width:100%;
    max-height: 100%;
    grid-area: Step1;
`

export const Step1Icon = styled.div`
    
`

export const Step1Text = styled.p`

`

// -----------------------------------------------

export const Step2 = styled.div`
    max-width:100%;
    max-height: 100%;
    grid-area: Step2;
`

export const Step2Icon = styled.div`

`

export const Step2Text = styled.p`

`

// -----------------------------------------------

export const Step3 = styled.div`
    max-width:100%;
    max-height: 100%;
    grid-area: Step3;
`

export const Step3Icon = styled.div`

`

export const Step3Text = styled.p`

`

// -----------------------------------------------

export const Step4 = styled.div`
    max-width:100%;
    max-height: 100%;
    grid-area: Step4;
`

export const Step4Icon = styled.div`

`

export const Step4Text = styled.p`

`

// -----------------------------------------------

export const SeeFullProcessLink = styled(Link)`

`

