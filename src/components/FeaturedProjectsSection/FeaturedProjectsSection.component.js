import React from 'react'
import FeaturedProjects from './FeaturedProject/FeaturedProject.component';
//Styles
import {SectionContainer, SectionBanner, BannerText, SeeAllProjectsLink } from './FeaturedProjectsSection.styles'
//Animations
import { fadeInOutOnScroll } from '../../framerMotionAnimations/animation';
import { useScroll } from '../../framerMotionAnimations/useScroll';

const FeaturedProjectsSection  = () => {
    const [element, controls] = useScroll();
    return (
        <SectionContainer variants={fadeInOutOnScroll} ref={element} animate={controls} initial="hidden">
            <SectionBanner>
                <BannerText>PROJECTS</BannerText>
            </SectionBanner>
            <FeaturedProjects/>
            <SeeAllProjectsLink to='/projects'>See All Projects</SeeAllProjectsLink>
        </SectionContainer>
    )
}

export default FeaturedProjectsSection;