import styled, { css } from 'styled-components';

export const StyledDroppableArea = styled.div<{ $isOver: boolean }>`
  min-height: 80%;
  padding: ${({theme}) => theme.spacing.md};
  border-width: 2px;
  border-style: dashed;
  border-radius: ${({theme}) => theme.borderRadius.medium};
  transition: background-color 0.2s, border-color 0.2s;
  border-color: ${({$isOver}) => $isOver ? '#fab7ce' : '#d1d5db'};
  background-color: ${({theme}) => theme.colors.background.tertiary};
  position: relative;
`;
