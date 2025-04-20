import { Theme } from './types';

export const lightTheme: Theme = {
  isDark: false,
  colors: {
    white: '#FFFFFF',
    white100: '#FAFAFA',
    white1000: '#E4E4E7',
    dark100: '#18181B',
    dark300: '#D4D4D8',
    dark500: '#71717A',
    dark1000: '#09090B',
    dark2000: '#27272A',
    purple1000: '#943DFF',
    purple700: '#523AE9', // new
    purple600: '#3B39E2', // new
    purple1000_05: 'rgba(148, 61, 255, 0.05)',
    darkBlue: '#2938DC',
    darkBlue1000: '#282C57',
    darkBlue1000_05: 'rgba(41, 56, 220, 0.05)',
    red1000: '#EF4444',
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
      fontFamily: 'Manrope-ExtraBold',
      fontSize: 22,
    },
    body: {
      fontFamily: 'Manrope-Regular',
      fontSize: 16,
    },
    caption: {
      fontFamily: 'Manrope-Regular',
      fontSize: 12,
    },
  },
  shape: {
    borderRadius: 12,
  },
};

export const darkTheme: Theme = {
  isDark: true,
  colors: {
    white: '#FFFFFF',
    white100: '#FAFAFA',
    white1000: '#E4E4E7',
    dark100: '#18181B',
    dark300: '#D4D4D8',
    dark500: '#71717A',
    purple700: '#523AE9', // new
    purple600: '#3B39E2', // new
    dark1000: '#09090B',
    dark2000: '#27272A',
    purple1000: '#943DFF',
    purple1000_05: 'rgba(148, 61, 255, 0.05)',
    darkBlue: '#2938DC',
    darkBlue1000: '#282C57',
    darkBlue1000_05: 'rgba(41, 56, 220, 0.05)',
    red1000: '#EF4444',
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
