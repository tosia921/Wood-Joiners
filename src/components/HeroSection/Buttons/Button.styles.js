import styled from 'styled-components';




export const StyledButton = styled.button`
    
    background-color: ${({primary}) => primary ? '#6B4D30' : '#412C17'};
    padding: 0.5rem 2rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    font-size: 2rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.1s ease-in;
    border-radius: 30px;
    
    &:hover {
        text-decoration: none;
        color: ${({ theme }) => theme.PrimaryTextColor};
        transform: translateY(-3px);
    }
`

