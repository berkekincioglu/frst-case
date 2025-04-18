import { Theme } from './types';

export const lightTheme: Theme = {
  isDark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#F7F7F7',
    primary: '#2563eb',
    secondary: '#64748b',
    error: '#ef4444',
    text: '#18181b',
    textSecondary: '#52525b',
    border: '#e5e7eb',
    disabled: '#cbd5e1',
    card: '#f1f5f9',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    fontFamily: 'Manrope-Regular',
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 20,
      xl: 28,
    },
    fontWeight: {
      regular: '400',
      medium: '600',
      bold: '700',
    },
    heading: {
      fontFamily: 'Manrope-Bold',
      fontSize: 28,
      fontWeight: '700',
    },
    body: {
      fontFamily: 'Manrope-Regular',
      fontSize: 16,
      fontWeight: '400',
    },
    caption: {
      fontFamily: 'Manrope-Regular',
      fontSize: 12,
      fontWeight: '400',
    },
  },
  shape: {
    borderRadius: 12,
  },
};

export const darkTheme: Theme = {
  isDark: true,
  colors: {
    background: '#18181b',
    surface: '#23232a',
    primary: '#60a5fa',
    secondary: '#94a3b8',
    error: '#f87171',
    text: '#f1f5f9',
    textSecondary: '#a1a1aa',
    border: '#27272a',
    disabled: '#52525b',
    card: '#27272a',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    fontFamily: 'Manrope-Regular',
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 20,
      xl: 28,
    },
    fontWeight: {
      regular: '400',
      medium: '600',
      bold: '700',
    },
    heading: {
      fontFamily: 'Manrope-Bold',
      fontSize: 28,
      fontWeight: '700',
    },
    body: {
      fontFamily: 'Manrope-Regular',
      fontSize: 16,
      fontWeight: '400',
    },
    caption: {
      fontFamily: 'Manrope-Regular',
      fontSize: 12,
      fontWeight: '400',
    },
  },
  shape: {
    borderRadius: 12,
  },
};
