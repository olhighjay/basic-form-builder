
import styled from 'styled-components';

export const StyledDashboardContainer = styled.div`
    max-width: 1320px;
//   margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
//   min-height: 100vh;
    width: 100%;
`;



export const StyledHeader = styled.div`
margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const StyledTitle = styled.h1`
font-size: 32px;
font-weight: 700;
 color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
`;

export const StyledSubtitle = styled.p`
font-size: 16px;
color: ${({ theme }) => theme.colors.text.secondary};
margin: 0;
`;

export const StyledFormsGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: ${({ theme }) => theme.spacing.lg};
`;

export const StyledEmptyState = styled.div`
text-align: center;
padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
grid-column: 1 / -1;
`;

export const StyledEmptyStateIcon = styled.div`
font-size: 64px;
margin-bottom: ${({ theme }) => theme.spacing.md};
opacity: 0.3;
`;

export const StyledEmptyStateText = styled.h3`
font-size: 20px;
color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
`;

export const StyledEmptyStateSubtext = styled.p`
font-size: 14px;
color: ${({ theme }) => theme.colors.text.tertiary};
margin: 0;
`;