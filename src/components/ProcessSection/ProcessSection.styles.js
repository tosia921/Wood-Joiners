import styled from 'styled-components';
import { Link } from 'gatsby';

import ProcessSectionBanner from '../../images/SectionBanners/sectionbanner3.png';
import StepBackground from '../../images/StepsBackground.png';
import ContactIcon from "../../images/svgs/ContactIcon.inline.svg";
import Handshake from "../../images/svgs/Handshake.inline.svg";
import WorkTime from "../../images/svgs/WorkTime.inline.svg";
import Budget from "../../images/svgs/Budget.inline.svg";

//Animations
import { motion } from 'framer-motion';


export const ProcessSectionContainer = styled(motion.section)`
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
    width: 40rem;
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
    transform: translate(-50%, -15%);
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5rem 5rem;
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
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`

export const Step1Icon = styled(ContactIcon)`
    /* stroke: black; */
    filter: drop-shadow( 1px 1px 2px rgba(0, 0, 0, .8));
    height: 7rem;
    width: 7rem;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-56%, -44%);
`

export const Step1Text = styled.p`
    font-size: 4rem;
    color: white;

`

// -----------------------------------------------

export const Step2 = styled.div`
    max-width:100%;
    max-height: 100%;
    grid-area: Step2;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`

export const Step2Icon = styled(Budget)`
    /* stroke: black; */
    filter: drop-shadow( 1px 1px 2px rgba(0, 0, 0, .4));
    height: 7rem;
    width: 7rem;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Step2Text = styled.p`
    font-size: 4rem;
    color: white;   
`

// -----------------------------------------------

export const Step3 = styled.div`
    max-width:100%;
    max-height: 100%;
    grid-area: Step3;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`

export const Step3Icon = styled(Handshake)`
    /* stroke: black; */
    filter: drop-shadow( 1px 1px 2px rgba(0, 0, 0, .8));
    height: 7rem;
    width: 7rem;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Step3Text = styled.p`
    font-size: 4rem;
    color: white;
`

// -----------------------------------------------

export const Step4 = styled.div`
    max-width:100%;
    max-height: 100%;
    grid-area: Step4;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

`

export const Step4Icon = styled(WorkTime)`
    /* stroke: black; */
    filter: drop-shadow( 1px 1px 2px rgba(0, 0, 0, .8));
    height: 7rem;
    width: 7rem;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Step4Text = styled.p`
    font-size: 4rem;
    color: white;
`

// -----------------------------------------------

export const IconBackground = styled.div`
    background-image: url(${StepBackground});
    background-position: center;
    background-size: cover;
    height: 15rem;
    width: 15rem;
    position: relative;
`

export const SeeFullProcessLink = styled(Link)`
    font-size: 3rem;
    color: ${({ theme }) => theme.SecondaryColor};
    text-shadow: ${({ theme }) => theme.TextShadow};
    text-decoration: underline;
    margin-top: 5rem;
    transition: all 0.2s ease-out;

    &:hover{
        text-decoration: none;
        color: ${({ theme }) => theme.SecondaryColor};
        transform: translateY(-3px);
        text-shadow: ${({ theme }) => theme.TextShadowBig};
        text-decoration: underline;
    }
    &::active
    &:visited {
        transform: translateY(0);
    }
`

