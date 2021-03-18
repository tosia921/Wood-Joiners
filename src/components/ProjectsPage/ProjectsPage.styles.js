import styled from "styled-components"
import { motion } from "framer-motion"

export const ProjectsPageWrapper = styled.div`
  width: 100%;
  height: fit-content;
`
export const SearchContainer = styled.ul`
  width: 100%;
  margin-top: 4rem;
`

export const SearchOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`

export const SearchButton = styled.button`
  font-size: 3rem;
  color: ${({ theme }) => theme.PrimaryTextColor};
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({ searchChoice }) => (searchChoice ? "#DEA264" : "white")};
  &:hover {
    color: ${({ theme }) => theme.SecondaryColor};
  }
  &:active,
  &:visited,
  &:focus {
    color: ${({ theme }) => theme.SecondaryColor};
    border: none;
    outline: none;
  }
`
export const ProjectsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 32rem 32rem 32rem;
  grid-auto-rows: 32rem;
  grid-gap: 4rem;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-top: 5rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 32rem 32rem;
    grid-auto-rows: 32rem;
  }
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`
