import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            background: {
                primary: string;
                secondary: string;
                tertiary: string;
            };
            text: {
                primary: string;
                tertiary: string;
                secondary: string;
            };
            border: {
                primary: string;
                secondary: string;
                focus: string;
            };
            status: {
                error: string;
            };
        };
        spacing: {
            xl: string;
            lg: string;
            sm: string;
            xs: string;
            md: string;
            xl: string;
            xxl: string;
        };
        shadows: {
            small: string,
            medium: string,
            large: string,
        },
        borderRadius: {
            small: string,
            medium: string,
            large: string,
        }
    }
} 