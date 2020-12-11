import React from "react"
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageWrapper } from './layout.style';

import Header from './Header/Header.component'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <GlobalStyles />
        <Header/>
        <main>{children}</main>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default Layout