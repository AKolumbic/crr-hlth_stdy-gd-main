import * as React from 'react';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { ThemeContextProvider } from '../components/ThemeContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NavBar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}
