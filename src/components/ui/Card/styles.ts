import styled from "styled-components";

export const StyledCardContainer = styled.div`
  background: ${({theme}) => theme.colors.background.primary};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  min-height: 200px;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
    border-color: ${({theme}) => theme.colors.border.secondary};
  }
`;

export const StyledFormTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const StyledFormDescription = styled.p`
  margin: 0 0 16px 0;
  font-size: 14px;
  color: #666;
  flex: 1;
`;

export const StyledCardChildrenWrapper = styled.div`
  width: 100%;
  height: 100%;
`;