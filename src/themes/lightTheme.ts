import type { Theme } from "@/types/theme";


export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    background: {
      primary: '#ffffff',
      secondary: '#fffafc',
      tertiary: '#ffe8e880',
    },
    text: {
      primary: '#212529',
      secondary: '#6c757d',
      tertiary: '#adb5bd',
      inverse: '#ffffff',
    },
    border: {
      primary: '#dee2e6',
      secondary: '#f577d85c',
      focus: '#ffb1e8',
    },
    status: {
      success: '#28a745',
      warning: '#ffc107',
      error: '#dc3545',
      info: '#17a2b8',
    },
    interactive: {
      hover: '#f8f9fa',
      active: '#e9ecef',
      disabled: '#6c757d',
    },
  },
  shadows: {
    small: '0 1px 3px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
    large: '0 10px 25px rgba(0, 0, 0, 0.15)',
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