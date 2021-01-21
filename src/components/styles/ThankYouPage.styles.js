import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100%;
    height: 67vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledP = styled.p`
    font-size: 4rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};
`
