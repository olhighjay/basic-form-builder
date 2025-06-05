import type { SavedForm } from "@/types";
import { Card } from "@/components/ui/Card";
import styled from "styled-components";

const StyledFormMetaWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  gap: 20px;
`;
const StyledFormMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({theme}) => theme.spacing.sm};
  width: 100%;
`;

interface FormCardProps {
    onClick: () => void;
}

export const FormCard: React.FC<FormCardProps> = ({ onClick }) => {
    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        }).format(date);
    };

    return (
        <Card title="Continue Editing" description="You will continue with the last form you created" onClick={onClick}>
            <StyledFormMetaWrapper>
                <StyledFormMeta>
                    {/* <span>Created {formatDate(form.createdAt)}</span>
                    <span>Updated {formatDate(form.updatedAt)}</span> */}
                </StyledFormMeta>
            </StyledFormMetaWrapper>
        </Card>
    );
};