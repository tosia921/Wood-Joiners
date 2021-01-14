import styled from 'styled-components';


export const StyledImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.5);
`

export const StyledPTag = styled.p`
    font-size: 2.8rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};
    text-align: center;
    letter-spacing: 0.5px;
`
export const StyledH1 = styled.h1`
    font-size: 7rem;
    color: ${({ theme }) => theme.SecondaryColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};
    text-align: center;
`

export const StyledH2 = styled.h2`
    font-size: 6rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};
    text-align: center;
`

export const StyledH3 = styled.h3`
    font-size: 5rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};
    text-align: center;
`

export const StyledH4 = styled.h4`
    font-size: 4rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};
    text-align: center;
`

export const StyledH5 = styled.h5`
    font-size: 3rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};
    text-align: center;
`

export const StyledH6 = styled.h6`
    font-size: 3rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};
    text-align: center;
`

