import styled from "styled-components"

export const StyledDatePosted = styled.p`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.PrimaryTextColor};
  text-shadow: ${({ theme }) => theme.TextShadowBig};
  text-align: right;
  letter-spacing: 0.5px;
  margin-top: 7rem;
`

export const StyledTitle = styled.p`
  font-size: 8rem;
  color: ${({ theme }) => theme.SecondaryColor};
  text-shadow: ${({ theme }) => theme.TextShadowBig};
  text-align: center;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
`
export const PageContainer = styled.article`
  margin-top: 7rem;
`