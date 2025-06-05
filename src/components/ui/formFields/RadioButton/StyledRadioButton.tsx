import { styled } from "styled-components";

export const StyledRadioBtnContainer = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StyledRadioBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const StyledRadioBtn = styled.input<{
  disabled?: boolean;
}>`
  appearance: none;
  outline: none;
  width: 14px;
  height: 14px;
  aspect-ratio: 1;
  padding: 4px;
  background: transparent !important;
  border: 1px solid ${({theme}) => theme.colors.border.primary};
  border-radius: 50%;
  display: grid;
  place-content: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  position: relative;
  filter: none !important;

  &:checked {
    border-color: ${({theme}) => theme.colors.border.focus};
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0.25rem;
    opacity: 0;
    scale: 0;
    transition: opacity 150ms ease-in-out, scale 150ms ease-in-out;
    border: 1px solid
      ${({ theme }) => theme.colors.border.primary};
    background-color: ${({ theme }) => theme.colors.border.focus};
    border-radius: inherit;
  }

  &:focus-visible::after,
  &:hover::after {
    opacity: 0.5;
    scale: 1;
    background-color: ${({ theme }) => theme.colors.border.focus};
  }

  &:checked::after {
    opacity: 1;
    scale: 1.6;
  }
`;

export const StyledRadioBtnTextWrapper = styled.div`
  top: 0;
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const StyledRadioBtnTitle = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
`;
