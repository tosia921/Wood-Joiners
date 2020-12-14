import styled from 'styled-components';
import WoodImg from '../../images/woodSVG.svg';

export const StyledLog = styled.div`
    width: 80vw;
    height: 12rem;
    background-image: url(${WoodImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 2rem;
    filter: drop-shadow(0px 10px 13px -7px #000000); 
`

