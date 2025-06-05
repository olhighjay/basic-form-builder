import styled from 'styled-components';

export const StyledMainBuilderContainer = styled.div`
  flex: 1;
  padding: ${({theme}) => theme.spacing.lg};
  max-height: 100vh;
  overflow-y: auto;

  @media only screen and (max-width: 1024px) {
        flex-basis: 100%;
    }
`;

export const StyledMainBuilderHeader = styled.div`
  margin-bottom: ${({theme}) => theme.spacing.md};
`;

export const StyledMainTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const StyledMainDescription = styled.p`
  color: ${({theme}) => theme.colors.text.secondary};
`;

export const StyledMainEmptyState = styled.div`
  text-align: center;
  color: ${({theme}) => theme.colors.text.primary};
  padding:  ${({theme}) => theme.spacing.xxl} 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin-top: auto;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;

  svg {
    margin: 0 auto 16px;
    opacity: 0.5;
  }
`;

export const StyledMainElementList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.md};
`;
