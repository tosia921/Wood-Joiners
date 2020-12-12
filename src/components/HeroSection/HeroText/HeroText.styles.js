import styled from 'styled-components';

export const ButtonsContainer = styled.div`
display: flex;
justify-content: space-evenly;
width: 50%;
`

export const HeroTextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledH1 = styled.h1`
    white-space: pre-line;
    text-align: center;
    font-size: 8rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};
`