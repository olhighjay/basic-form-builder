import { styled } from "styled-components";

export const StyledCheckbox = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  appearance: none;
  -webkit-appearance: none;
  background-color: none;
  cursor: pointer;
  position: relative;
  position: absolute;
  top: 0.5px;
  transform: translate(0, -50%);
  border: 1px solid ${({theme}) => theme.colors.border.primary};

  &:checked {
    background-color: #d9179f;
    border: 2px solid
      ${({ theme }) => theme.colors.border.focus};
  }

  &:checked::before {
    content: "✓";
    display: block;
    color: #fff;
    position: absolute;
    top: -2px;
    left: 1px;
    font-size: 14px;
  }

  &:disabled {
    cursor: not-allowed;
    border: 1px solid
      ${({ theme }) => theme.colors.border.primary};
  }

  &:checked:disabled {
    background-color: ${({ theme }) => theme.colors.border.primary};
    border: 1px solid
      ${({ theme }) => theme.colors.text.primary};
  }

  &:checked:disabled::before {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const StyledCheckWrapper = styled.div`
  position: relative;
`;

export const StyledCheckContainer = styled.div`
  display: flex;
  align-items: center;
`;

