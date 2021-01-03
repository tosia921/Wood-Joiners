import React from 'react'

import FeaturedProjects from './FeaturedProject/FeaturedProject.component';

import {SectionContainer, SectionBanner, BannerText } from './FeaturedProjectsSection.styles'

const FeaturedProjectsSection  = () => {
    return (
        <SectionContainer>
            <SectionBanner>
                <BannerText>PROJECTS</BannerText>
            </SectionBanner>
            <FeaturedProjects/>
        </SectionContainer>
    )
}

export default FeaturedProjectsSection;