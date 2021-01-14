import { createGlobalStyle } from 'styled-components';
import bodyBackground from '../../images/wooden-background.jpg'
 
const GlobalStyles = createGlobalStyle`
  body {
    
    background: url(${bodyBackground}) repeat-y center center fixed;
    background-size: cover;
    
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
