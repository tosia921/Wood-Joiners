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
                <Button text='Projects' primary to='/projects'/>
                <Button text='Contact' to='/contact'/>
            </ButtonsContainer>
        </HeroTextContainer>
        )
    }
}

export default HeroText;