import styled from 'styled-components';




export const StyledButton = styled.button`
    
    background-color: ${({primary}) => primary ? '#6B4D30' : '#412C17'};
    padding: 0.5rem 3rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    box-shadow: ${({ theme }) => theme.ButtonBoxShadow};
    font-size: 1.8rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.1s ease-in;
    border-radius: 30px;
    text-align: center;
    letter-spacing: 1.1px;
    
    
    &:hover {
        text-decoration: none;
        color: #DEA264;
        transform: translateY(-2px);
        box-shadow: 0px 15px 20px -10px #000000;
    }
    &:active{
        transform: translateY(0);
        box-shadow: 0px 10px 13px -7px #000000;
    }
`

