import React from 'react';

import { StyledImageSlider, StyledH1, StyledH12 } from './ImageSlider.styles';

import { Carousel } from 'react-bootstrap';

import pic1 from '../../../images/HeroSliderImages/pic1.jpg';
import pic2 from '../../../images/HeroSliderImages/pic2.jpg';
import pic3 from '../../../images/HeroSliderImages/pic3.jpg';


const ImageSlider = () => {
    
    return (
        <StyledImageSlider>
            <Carousel style={{'border-radius':"10px",'overflow':"hidden"}}>
                <Carousel.Item style={{'position':"relative"}}>
                    <img style={{'height':"40rem"}} 
                        className="d-block w-100"  
                        src={pic1}
                        alt="This is first Slider"
                    />
                    <StyledH1>BRING NEW LIFE</StyledH1>                    
                    <StyledH12>TO YOUR OLD FLOOR</StyledH12>                    
                    
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height':"40rem"}} 
                        className="d-block w-100"  
                        src={pic2}
                        alt="This is first Slider"
                    />  
                    <StyledH1>BRING NEW LIFE</StyledH1>                    
                    <StyledH12>TO YOUR OLD FLOOR</StyledH12>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height':"40rem"}} 
                         className="d-block w-100"  
                         src={pic3}
                         alt="This is first Slider"
                    />
                    <StyledH1>BRING NEW LIFE</StyledH1>                    
                    <StyledH12>TO YOUR OLD FLOOR</StyledH12>
                </Carousel.Item>
            </Carousel>
        </StyledImageSlider>
    )
}

export default ImageSlider

