import React from 'react'

import FeaturedProjects from './FeaturedProject/FeaturedProject.component';

import {SectionContainer, SectionBanner, BannerText, SeeAllProjectsLink } from './FeaturedProjectsSection.styles'

const FeaturedProjectsSection  = () => {
    return (
        <SectionContainer>
            <SectionBanner>
                <BannerText>PROJECTS</BannerText>
            </SectionBanner>
            <FeaturedProjects/>
            <SeeAllProjectsLink to='/projects'>See All Projects</SeeAllProjectsLink>
        </SectionContainer>
    )
}

export default FeaturedProjectsSection;