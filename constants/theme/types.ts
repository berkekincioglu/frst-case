// Theme types for type safety
import { TextStyle, ViewStyle } from 'react-native';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeColors {
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  error: string;
  text: string;
  textSecondary: string;
  border: string;
  disabled: string;
  card: string;
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
