import React from 'react';

import { HeroTextContainer, StyledH1, ButtonsContainer } from './HeroText.styles';

import Button from '../Buttons/Button.component'


class HeroText extends React.Component {
    render() {
        const text = "BRING NEW LIFE \n TO YOUR OLD FLOOR";
        return (
        <HeroTextContainer>
            <StyledH1>{text}</StyledH1>
            <ButtonsContainer>
                <Button text='See Our Projects' primary to='/about'/>
                <Button text='Contact' to='/about'/>
            </ButtonsContainer>
        </HeroTextContainer>
        )
    }
}

export default HeroText;