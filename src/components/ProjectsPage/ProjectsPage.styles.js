import styled from 'styled-components'

export const ProjectsPageWrapper = styled.div`
    width: 100%;
    height: 100rem;
`
export const SearchContainer = styled.ul`
    width: 100%;
    margin-top: 4rem;
`

export const SearchList = styled.div`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
`

export const SearchItem = styled.li`
    font-size: 3rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    cursor: pointer;
`
export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 30rem 30rem 30rem;
  grid-auto-rows: 30rem;
  gap: 4em 4em;
`