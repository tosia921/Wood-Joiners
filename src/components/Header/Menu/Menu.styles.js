import styled from 'styled-components';
import { Link } from 'gatsby';
import menuBackground from '../../../images/menuBackground.png';

// ${({ theme }) => theme.PrimaryTextColor}

export const MenuContainer = styled.nav`
    background-image: url(${menuBackground});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height:7rem;
    width: 47rem;
    margin-top: -9px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        background-image: none;
        background-color: gray;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        margin-top: -3rem;
        margin-right: -3rem;
        margin-left: -100%;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;
    }

`
export const NavMenuItem = styled(Link)`
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadow};
    text-decoration: none;
    font-size: 2rem;
    margin-top: -3px;
    transition: transform 0.1s ease-out;
    &:not(:last-child) {
        margin-right: 3rem;
    }
    &:hover {
        color: ${({ theme }) => theme.SecondaryColor};
    }
    &:active {
        transform: translateY(2px);
    }

    @media screen and (max-width: 768px) {
        font-size: 5rem;

        &:not(:last-child) {
            margin-right: 0rem;
            margin-bottom: 1rem;
        }
    }
`