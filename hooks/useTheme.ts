import { useThemeContext } from '@/contexts/ThemeContext';

// This hook gives you theme, mode, and controls
export function useTheme() {
  const { theme, mode, setMode, toggleMode } = useThemeContext();
  return { theme, mode, setMode, toggleMode };
}
