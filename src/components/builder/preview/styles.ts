import styled from 'styled-components';
import { Form } from 'formik';

export const StyledPreviewContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  flex-basis: 45%;
  padding: 32px 24px;

  @media only screen and (max-width: 1024px) {
        flex-basis: 100%;
    }
`;

export const StyledPreviewTabHeader = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.background.tertiary};
  padding: 4px;
  margin: 0 16px;
  width: max-content;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export const StyledPreviewTabButton = styled.span<{ active?: boolean }>`
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: ${({ active, theme }) => active ?
        theme.colors.background.primary :
        'transparent'
    };
`;

export const StyledPreviewIcon = styled.span`
  display: inline-flex;
  margin-right: ${({ theme }) => theme.spacing.md};
`;


export const StyledJsonContainer = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 24px;
`;

export const StyledJsonContent = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  max-height: 100%;
`;

export const StyledJsonCodeBlock = styled.pre`
  background-color: #f3f4f6;
  color: #111827;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  overflow: auto;
  height: 100%;
  background-color:${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.secondary};
`;


export const StyledFormPreviewContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 16px;
`;

export const StyledFormPreviewScrollableContent = styled.div`
  flex: 1;
  padding: 1rem;
  overflow: auto;
  background-color:${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export const StyledFormPreviewEmptyMessage = styled.div`
  margin-top: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const StyledFormPreviewStyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const StyledFormPreviewFieldWrapper = styled.div``;

export const StyledFormPreviewLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const StyledFormPreviewRequiredAsterisk = styled.span`
  color: ${({ theme }) => theme.colors.status.error};
  margin-left: 4px;
`;

export const StyledFormPreviewSubmitButton = styled.button`
  width: 100%;
  background-color: #ff000080;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background-color 0.2s;
  width: max-content;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgb(246, 63, 63);;
  }
`;

export const StyledErrorMessage = styled.div`
    color: #ef4444;
    font-size: 12px;
    margin-top: 4px;
`;


export const StyledSubmissionInfoContainer = styled.div`
  margin-bottom: 1rem;
`;

export const StyledSubmissionInfoText = styled.p`
  color: ${({theme}) => theme.colors.text.secondary};
  font-size: 12px;
`;

export const StyledSubmissionFieldList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px
`;

export const StyledSubmissionFlexBetween = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: space-between;
`;

export const StyledSubmissionFieldTypeBadge = styled.span`
  font-size: 12px; 
  color: #9ca3af; 
  background-color: ${({theme}) => theme.colors.background.secondary};
  padding: 4px 8px;
  border-radius: ${({theme}) => theme.borderRadius.small};
`;

export const StyledSubmissionFieldContainer = styled.div``;
export const StyledSubmissionFieldLabel = styled.label`
    color: ${({theme}) => theme.colors.text.secondary};
    font-size: 12px;
`;
export const StyledSubmissionFieldValue = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.colors.text.primary};
`;

export const StyledSubmissionBtn = styled(StyledFormPreviewSubmitButton)`
    margin-top: 24px;
`;

export const StyledImportBtn = styled(StyledSubmissionBtn)`
  color: ${({theme}) => theme.colors.background.primary};
`;

export const StyledHiddenInput = styled.input`
  display: none;
`;

export const StyledPrevBtnFlex = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledFlexBetween = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;
  justify-content: space-between;
  padding-right: 16px;

  @media only screen and (max-width: 1024px) {
        flex-wrap: wrap;
    }
`;
