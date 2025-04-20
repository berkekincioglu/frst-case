import { Theme } from './types';

export const lightTheme: Theme = {
  isDark: false,
  colors: {
    background: '#FFFFFF', // white
    surface: '#FAFAFA', // white100
    primary: '#2938DC', // darkBlue
    secondary: '#943DFF', // purple1000
    error: '#EF4444', // red1000
    text: '#18181B', // dark100
    textSecondary: '#71717A', // dark500
    border: '#E4E4E7', // white1000
    disabled: '#D4D4D8', // dark300
    card: '#FAFAFA', // white100
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
    background: '#18181B', // dark100
    surface: '#27272A', // dark2000
    primary: '#943DFF', // purple1000
    secondary: '#2938DC', // darkBlue
    error: '#EF4444', // red1000
    text: '#FAFAFA', // white100
    textSecondary: '#D4D4D8', // dark300
    border: '#09090B', // dark1000
    disabled: '#71717A', // dark500
    card: '#27272A', // dark2000
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
