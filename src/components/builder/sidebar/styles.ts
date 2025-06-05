// Sidebar.tsx (or wherever this JSX lives)

import styled from 'styled-components';

export const StyledSidebarContainer = styled.div`
  width: 190px;
  height: 100%;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border-right: 1px solid #e5e7eb;

  @media only screen and (max-width: 1024px) {
        flex-wrap: wrap;
        width: 100%;
        height: max-content;
    }
`;

export const StyledInnerContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

export const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.spacing.md}; 
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary}; 
  margin-bottom: 16px;
`;

export const StyledElementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs}; 

  @media only screen and (max-width: 1024px) {
        width: max-content;
        flex-direction: row;
        max-width: 100%;
        flex-wrap: wrap;
    }
`;

export const StyledSidebarElementContainer = styled.div<{ $isDragging: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm}; 
  padding: ${({ theme }) => theme.spacing.sm}; 
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};  
  border: 1px ${({ theme }) => theme.colors.border.primary};
  cursor: move;
  transition: all 0.2s;
  opacity: ${({ $isDragging }) => $isDragging ? 0.5 : 1};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium}; 
  }
`;

export const StyledSidebarElementLabel = styled.span`
  font-size: 14px; 
  font-weight: 500; 
  color: ${({ theme }) => theme.colors.text.secondary};
`;





