import { createGlobalStyle } from 'styled-components';
import bodyBackground from '../../images/bodyBackground-min.jpg'
 
const GlobalStyles = createGlobalStyle`
  body {
    background-image: 
        linear-gradient(
            rgba(0, 0, 0, 0.2), 
            rgba(0, 0, 0, 0.2)
            ),
        url(${bodyBackground});
    background-size: cover;
    background-repeat: repeat;
    overflow-x: hidden;

    padding: 1.5rem calc((100vw - 1400px) / 2);
    @media screen and (max-width: 1400px) {
        padding: 1.5rem 3rem;
    }
    
    }

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Teko, Helvetica, Sans-Serif;
    font-size: 62.5%;
    @media screen and (max-width: 768px) {
        font-size: 40%;
    }
    @media screen and (max-width: 1000px) {
        font-size: 50%;
    }
    }

    
  
`;
 
export default GlobalStyles;




