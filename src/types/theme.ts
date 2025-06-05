export type AppTheme = 'light' | 'dark' | 'system';

export interface ThemeColors {
    // Background colors
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    
    // Text colors
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      inverse: string;
    };
    
    // Border colors
    border: {
      primary: string;
      secondary: string;
      focus: string;
    };
    
    // Status colors
    status: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };
    
    // Interactive colors
    interactive: {
      hover: string;
      active: string;
      disabled: string;
    };
  }
  
  export interface Theme {
    mode: 'light' | 'dark';
    colors: ThemeColors;
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }