import React from 'react';

import Img1 from '../../images/wooden-background.jpg'
import { GridContainer, ImgContainer1, ImgContainer2, ImgContainer3, ImgContainer4, ImgContainer5,
         TextArea1, TextArea2, TextArea3, TextArea4, TextArea5, StyledPtag, WoodContainer, StyledNum } from './Process.styles'
//Animations
import { container } from '../../framerMotionAnimations/animation';
import { item } from '../../framerMotionAnimations/animation';

const Process = () => {
    return (
        <GridContainer variants={container} initial="hidden" animate="show">
            <TextArea1 variants={item}>
                <WoodContainer>
                    <StyledNum>1</StyledNum>
                </WoodContainer>
                <StyledPtag>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </StyledPtag>
            </TextArea1>
            <ImgContainer1 src={Img1} alt="aaa" variants={item}/>
            <ImgContainer2 src={Img1} alt="aaa" variants={item}/>
            <TextArea2 variants={item}>
            <WoodContainer>
                    <StyledNum>2</StyledNum>
                </WoodContainer>
                <StyledPtag>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </StyledPtag>
            </TextArea2>
            <TextArea3 variants={item}>
            <WoodContainer>
                <StyledNum>3</StyledNum>
                </WoodContainer>
                <StyledPtag>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </StyledPtag>
            </TextArea3>
            <ImgContainer3 src={Img1} alt="aaa" variants={item}/>
            <ImgContainer4 src={Img1} alt="aaa" variants={item}/>
            <TextArea4 variants={item}>
            <WoodContainer>
                <StyledNum>4</StyledNum>
                </WoodContainer>
                <StyledPtag>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </StyledPtag>
            </TextArea4>
            <TextArea5 variants={item}>
            <WoodContainer>
                    <StyledNum>5</StyledNum>
                </WoodContainer>
                <StyledPtag>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </StyledPtag>
            </TextArea5>
            <ImgContainer5 src={Img1} alt="aaa" variants={item}/>
        </GridContainer>
    )
}

export default Process;