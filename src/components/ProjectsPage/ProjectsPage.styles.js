import styled from 'styled-components'

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
    &:hover {
        color: ${({ theme }) => theme.SecondaryColor};
    }
    &:active,
    &:visited,
    &::selection {
        color: ${({ theme }) => theme.SecondaryColor};
        border: none;
    }
`
export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 32rem 32rem 32rem;
  grid-auto-rows: 32rem;
  grid-gap: 4rem;
  justify-content: center;
  justify-items:center;
  align-items:center;
  margin-top: 5rem;
`