import styled from "styled-components"
import Img from 'gatsby-image';

export const ProjectsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 830px) {
    flex-direction: column;
  }
`
export const TitleDiv = styled.div`
  height: 30%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 70%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

export const StyledImg = styled(Img)`
  height: 30rem;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.ButtonBoxShadow};
`

export const ProjectTitle = styled.h3`
  font-size: 2.7rem;
  color: ${({ theme }) => theme.PrimaryTextColor};
`

export const ProjectDiv = styled.div`
  width: 30rem;
  height: 30rem;
  position: relative;
  margin: 0 2rem;
  box-shadow: ${({ theme }) => theme.ButtonBoxShadow};
  border-radius: 20px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }

  @media only screen and (max-width: 830px) {
    margin-bottom: 3rem;
  }
`
