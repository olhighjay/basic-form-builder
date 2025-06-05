import { useState, useEffect } from 'react';
import type { AppTheme, Theme } from '@/types/theme';
import { lightTheme } from '@/themes/lightTheme';
import { darkTheme } from '@/themes/darkTheme';

const THEME_STORAGE_KEY = 'form-builder-theme';

export const useTheme = () => {
  const [themeMode, setThemeMode] = useState<AppTheme>(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return (stored as AppTheme) || 'system';
  });

  const [actualTheme, setActualTheme] = useState<Theme>(() => {
    if (themeMode === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? darkTheme 
        : lightTheme;
    }
    return themeMode === 'dark' ? darkTheme : lightTheme;
  });

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, themeMode);
    
    if (themeMode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e: MediaQueryListEvent) => {
        setActualTheme(e.matches ? darkTheme : lightTheme);
      };
      
      setActualTheme(mediaQuery.matches ? darkTheme : lightTheme);
      mediaQuery.addEventListener('change', handleChange);
      
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      setActualTheme(themeMode === 'dark' ? darkTheme : lightTheme);
    }
  }, [themeMode]);

  const changeTheme = (mode: AppTheme) => {
    setThemeMode(mode);
  };

  return {
    theme: actualTheme,
    themeMode,
    changeTheme,
    isDark: actualTheme.mode === 'dark',
  };
};