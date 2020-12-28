import React from 'react';
import { SectionContainer, SectionBanner, BannerText, StyledPtag, StyledCarousel, StyledCarouselItem, CustomerComment, CustomerName, RatedPeopleLogo } from './TestimonialSection.styles';




const TestimonialSection = () => {

    return (
        <SectionContainer>

            <SectionBanner>
                <BannerText>WHAT PEOPLE SAY</BannerText>
            </SectionBanner>

            <StyledPtag>DON'T BELIEVE US, BELIEVE OUR CUSTOMERS</StyledPtag>

            <StyledCarousel>
                <StyledCarouselItem>
                       
                        <CustomerComment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula aliquet odio, eu maximus dolor gravida eu. Cras luctus pharetra risus eu interdum.
                        In ultrices eros nec risus congue pulvinar a et quam. Ut ultricies enim dui, sit amet posuere est finibus at. 
                        Cras quam ligula, ultricies sit amet convallis.</CustomerComment>
                        <CustomerName>Mark Johnson</CustomerName>
                    
                </StyledCarouselItem>
                <StyledCarouselItem>
                    
                        <CustomerComment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula aliquet odio, eu maximus dolor gravida eu. Cras luctus pharetra risus eu interdum.
                        </CustomerComment>
                        <CustomerName>Tomasz Posiadala</CustomerName>
                    
                </StyledCarouselItem>
                <StyledCarouselItem>
                    
                        <CustomerComment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula aliquet odio, eu maximus dolor gravida eu. Cras luctus pharetra risus eu interdum.
                        In ultrices eros nec risus congue pulvinar a et quam. </CustomerComment>
                        <CustomerName>Amy Wine</CustomerName>
                        
                </StyledCarouselItem>
            </StyledCarousel>

            <StyledPtag>CHECK REST OF OUR AMAZING RATING AND COMMENTS AT:</StyledPtag>
            <a href="#">
                <RatedPeopleLogo/>
            </a>

        
        </SectionContainer>
    )
}
 export default TestimonialSection;