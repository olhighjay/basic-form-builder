import type { Theme } from "@/types/theme";


export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    background: {
      primary: '#1a1a1a',
      secondary: '#2D232A',
      tertiary: '#2b1a25',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
      tertiary: '#808080',
      inverse: '#1a1a1a',
    },
    border: {
      primary: '#404040',
      secondary: '#333333',
      focus: '#ffb1e8',
    },
    status: {
      success: '#51cf66',
      warning: '#ffd43b',
      error: '#ff6b6b',
      info: '#74c0fc',
    },
    interactive: {
      hover: '#333333',
      active: '#404040',
      disabled: '#666666',
    },
  },
  shadows: {
    small: '0 1px 3px rgba(0, 0, 0, 0.3)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.3)',
    large: '0 10px 25px rgba(0, 0, 0, 0.4)',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
};