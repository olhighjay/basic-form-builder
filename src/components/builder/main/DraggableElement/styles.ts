import styled, { css } from 'styled-components';

export const StyledDraggableContainer = styled.div<{
    $isDragging: boolean;
    $isSelected: boolean;
}>`
  position: relative;
  padding: ${({ theme }) => theme.spacing.md};
  border-width: 2px;
  border-radius:${({ theme }) => theme.borderRadius.medium};
  cursor: move;
  transition: all 0.2s ease;
  border-color: ${($isSelected) => ($isSelected ? '#fab7ce' : '#e5e7eb')};
  background-color: ${({theme}) => theme.colors.background.primary};
`;

export const StyledDraggableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
//   margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const StyledDraggableLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const StyledRequiredMark = styled.span`
  color: #ef4444;
  margin-left: 4px;;
`;

export const StyledRemoveButton = styled.button`
  padding: 4px;
  color: #ef4444;
  background: transparent;
  border: none;
  cursor: pointer;

    &:hover {
        color: #b91c1c;
    }
`;

export const StyledEditButton = styled.button`
  padding: 4px;
  color: ${({theme}) => theme.colors.text.secondary};
  background: transparent;
  border: none;
  cursor: pointer;

    &:hover {
        color: ${({theme}) => theme.colors.border.primary};
    }
`;

export const StyledSelectedBadge = styled.div`
  position: absolute;
  top: -${({ theme }) => theme.spacing.md};
  right: -${({ theme }) => theme.spacing.md};
  background-color: #3b82f6;
  color: white;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;
