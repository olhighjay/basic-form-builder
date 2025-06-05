import styled from "styled-components";

export const StyledTextInput = styled.input`
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
    padding: 12px;
    width: 100%;
    height: 32px;
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
    &:focus-visible {
      outline: none;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    -moz-appearance: textfield;
    appearance: textfield;
  `;