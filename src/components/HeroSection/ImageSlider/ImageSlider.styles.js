import styled from 'styled-components';


export const StyledImageSlider = styled.div`
    width: 100%;
    height: 100%;
`

export const StyledImg = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 1400rem;
    height: 42rem;
`
export const StyledH1 = styled.h1`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: pre-wrap;
    z-index: 100;
    font-size: 8rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};
`
export const StyledH12 = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: pre-wrap;
    z-index: 100;
    font-size: 8rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};
`