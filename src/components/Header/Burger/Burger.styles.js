import styled from 'styled-components';
import woodBurgerMenu from '../../../images/woodburgerMenu.png'

export const StyledBurger = styled.div`
    background-image: url(${woodBurgerMenu});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height:4rem;
    width: 4rem;
    display:none;
    z-index: 100;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(0, 45%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`