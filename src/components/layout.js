import React from "react"
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import 'bootstrap/dist/css/bootstrap.min.css';

import { PageWrapper, StyledMain } from './layout.style'
import Header from './Header/Header.component'
import Footer from '../components/Footer/Footer.component'

const Layout = ({ children }) => {
  return (
    
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <PageWrapper>
            <Header />
            <StyledMain>{children}</StyledMain>
            <Footer/>
        </PageWrapper>
    </ThemeProvider>
    
  );
}

export default Layout