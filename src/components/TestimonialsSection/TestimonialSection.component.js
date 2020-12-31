import React from 'react';
import { SectionContainer, SectionBanner, BannerText, StyledPtag, StyledCarousel, StyledCarouselItem, CustomerComment, CustomerName, RatedPeopleLogo,
         Stars, StarSVG, RatedPeopleContainer, RatedPeopleText, StyledPtag2 } from './TestimonialSection.styles';




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
                        </CustomerComment>
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

            <StyledPtag2>CHECK OUR AMAZING</StyledPtag2>
            <Stars>
                <StarSVG/>
                <StarSVG/>
                <StarSVG/>
                <StarSVG/>
                <StarSVG/>
            </Stars>
            <StyledPtag2>RATING AND COMMENTS AT:</StyledPtag2>
            <a href="#" style={{'text-decoration': 'none'}}>
                <RatedPeopleContainer>
                    <RatedPeopleLogo/>
                    <RatedPeopleText>ratedpeople.com</RatedPeopleText>
                </RatedPeopleContainer>
            </a>

        
        </SectionContainer>
    )
}
 export default TestimonialSection;