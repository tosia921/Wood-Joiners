import React from "react"
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

import Header from './Header/Header.component'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header/>
        <main>{children}</main>
      </>
    </ThemeProvider>
  );
}

export default Layout