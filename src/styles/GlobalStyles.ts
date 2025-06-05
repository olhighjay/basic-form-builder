import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({ theme }) => theme.colors.background.secondary};
        color: ${({ theme }) => theme.colors.text.primary};
        transition: background-color 0.2s ease, color 0.2s ease;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    /* Scrollbar styling */
    ::-webkit-scrollbar {
        width: 2px;
        height: 2px;
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.background.secondary};
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.border.primary};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.colors.text.tertiary};
    }

    /* Focus outline */
    :focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.border.focus};
        outline-offset: 2px;
    }

    textarea, select, input[type="date"] {
        background-color: ${({ theme }) => theme.colors.background.primary};
        border: 1px solid ${({ theme }) => theme.colors.border.primary};
        color: ${({ theme }) => theme.colors.text.primary};

        &:focus {
            border-radius: 4px;
            border: 1.5px solid ${({ theme }) => theme.colors.border.focus};
        }
        
        &:disabled {
            background-color: ${({ theme }) => theme.colors.background.secondary};
            color: ${({ theme }) => theme.colors.text.secondary};
        }
        
        &::placeholder {
            color: ${({ theme }) => theme.colors.border.primary};
        }

        border-radius: 4px;
        box-sizing: border-box;
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        line-height: 100%;
        &:focus-visible {
            outline: none;
        }
    }

    textarea {
        resize: none;
        height: 112px;
        padding: 12px;
        -moz-appearance: textfield;
        appearance: textfield;
    }

    select {
        height: 32px;
        padding: 2px;
    }

    input[type="date"] {
    padding: 8px;
        &::-webkit-calendar-picker-indicator {
        filter: invert(0.5);
        cursor: pointer;
    }

}`;