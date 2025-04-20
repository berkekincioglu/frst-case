// Theme types for type safety
import { TextStyle, ViewStyle } from 'react-native';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeColors {
  white: string;
  white100: string;
  white1000: string;
  dark100: string;
  dark300: string;
  dark500: string;
  dark1000: string;
  dark2000: string;
  purple1000: string;
  purple1000_05: string;
  darkBlue: string;
  darkBlue1000: string;
  darkBlue1000_05: string;
  red1000: string;
  purple700: string;
  purple600: string;
}

export interface ThemeSpacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface ThemeTypography {
  fontFamily: string;
  fontSize: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  fontWeight: {
    regular: string | number;
    medium: string | number;
    bold: string | number;
  };
  heading: TextStyle;
  body: TextStyle;
  caption: TextStyle;
}

export interface ThemeShape {
  borderRadius: number;
}

export interface Theme {
  colors: ThemeColors;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
  shape: ThemeShape;
  isDark: boolean;
}
