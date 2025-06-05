import { createContext, useContext } from 'react';
import type { Theme, AppTheme } from '@/types/theme';

interface ThemeContextType {
  theme: Theme;
  themeMode: AppTheme;
  changeTheme: (mode: AppTheme) => void;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export default useThemeContext;
