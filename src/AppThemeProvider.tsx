import { ThemeProvider as StyledThemeProvider, type DefaultTheme } from 'styled-components';
import { useTheme } from '@/hooks/useTheme';
import type { ReactNode } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

export const AppThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeData = useTheme();

  return (
    <ThemeContext.Provider value={{
      theme: themeData.theme,
      themeMode: themeData.themeMode,
      changeTheme: themeData.changeTheme,
      isDark: themeData.isDark
    }}>
      <StyledThemeProvider theme={themeData.theme as unknown as DefaultTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};