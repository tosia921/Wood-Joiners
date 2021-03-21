import styled from "styled-components"

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
  font-weight: 600;
  letter-spacing: 3px;
  line-height: 0.9;
  color: ${({ theme }) => theme.PrimaryTextColor};
  text-shadow: ${({ theme }) => theme.TextShadowBig};
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 4rem;
  }
`
export const StyledH2asH1 = styled.h1`
  white-space: pre-line;
  text-align: center;
  font-size: 5rem;
  font-weight: 600;
  letter-spacing: 3px;
  line-height: 0.9;
  color: ${({ theme }) => theme.PrimaryTextColor};
  text-shadow: ${({ theme }) => theme.TextShadowBig};
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 3rem;
  }
`
export const StyledH3 = styled.h3`
  white-space: pre-line;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 3px;
  line-height: 0.9;
  color: ${({ theme }) => theme.PrimaryTextColor};
  text-shadow: ${({ theme }) => theme.TextShadowBig};
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
`
