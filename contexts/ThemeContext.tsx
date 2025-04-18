import React, { createContext, useContext, useMemo, useState, ReactNode, useEffect } from 'react';
import { Appearance } from 'react-native';
import { lightTheme, darkTheme } from '@/constants/theme/variants';
import { Theme, ThemeMode } from '@/constants/theme/types';

interface ThemeContextProps {
  theme: Theme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');

  // Optionally, sync with system theme
  useEffect(() => {
    if (mode === 'system') {
      const listener = Appearance.addChangeListener(({ colorScheme }) => {
        setMode(colorScheme === 'dark' ? 'dark' : 'light');
      });
      return () => listener.remove();
    }
  }, [mode]);

  const theme = useMemo(() => {
    if (mode === 'dark') return darkTheme;
    if (mode === 'light') return lightTheme;
    // fallback to system
    const colorScheme = Appearance.getColorScheme();
    return colorScheme === 'dark' ? darkTheme : lightTheme;
  }, [mode]);

  const toggleMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeContext must be used within ThemeProvider');
  return ctx;
}
