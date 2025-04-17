import * as React from 'react';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import NavBar from '../components/NavBar';

const theme = createTheme();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
