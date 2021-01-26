import styled from 'styled-components';

export const PageWrapper = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    overflow: hidden;
`

export const StyledMain = styled.main`
    flex-grow: 1;
    padding: 0 calc((100vw - 1400px) / 2);
    @media screen and (max-width: 1400px) {
        padding: 1.5rem 3rem 0;
        
    }
`

