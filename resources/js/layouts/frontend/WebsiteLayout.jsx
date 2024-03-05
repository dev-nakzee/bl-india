import React from 'react';
import TopBar from '../../components/frontend/TopBar';
import NavBar from '../../components/frontend/NavBar';
import Footer from '../../components/frontend/Footer';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import BlueGrey from '../../themes/BlueGrey';

const WebsiteLayout = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={BlueGrey}>
        <TopBar />
        <NavBar />
        <main>
            { children }
        </main>
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default WebsiteLayout;