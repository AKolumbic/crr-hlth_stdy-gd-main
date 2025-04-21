import * as React from 'react';
import { createTheme, ThemeProvider, PaletteMode, useMediaQuery } from '@mui/material';

export type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextProps {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  mode: 'system',
  setMode: () => {},
});

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<ThemeMode>('system');
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');

  // Determine actual palette mode
  const paletteMode: PaletteMode =
    mode === 'system' ? (prefersDark ? 'dark' : 'light') : mode;

  const theme = React.useMemo(
    () => createTheme({ palette: { mode: paletteMode } }),
    [paletteMode]
  );

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
