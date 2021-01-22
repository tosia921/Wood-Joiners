import styled from 'styled-components';

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding-top: 1.5rem;
    position: relative;
    z-index: 100;
    margin-top: 1rem;
    padding: 0 calc((100vw - 1400px) / 2);
    @media screen and (max-width: 1400px) {
        padding: 1.5rem 3rem 0;
        
    }
`