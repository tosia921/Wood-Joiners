import styled from "styled-components"
import { Link } from "gatsby"

import logoBackground from "../../../images/logoBackground.png"

export const LogoContainer = styled.div`
  background-image: url(${logoBackground});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 7rem;
  width: 23rem;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    height: 5rem;
    width: 20rem;
  }

  position: relative;
`

export const StyledLogo = styled(Link)`
  color: ${({ theme }) => theme.PrimaryTextColor};
  font-size: 2rem;
  font-weight: 700;
  text-shadow: ${({ theme }) => theme.TextShadow};
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-45%, -50%);
  text-decoration: none;
  cursor: pointer;
  &:hover{
    text-decoration: none;
    color: ${({ theme }) => theme.PrimaryTextColor};
  }
`
