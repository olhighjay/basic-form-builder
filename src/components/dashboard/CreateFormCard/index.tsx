import { Card } from "@/components/ui/Card";
import styled from "styled-components";

const CreateWrapper = styled.div`
    width: 100%;
    text-align: center;
`;

const CreateIcon = styled.div`
    font-size: 48px;
    margin-bottom: 16px;
`;

const CreateText = styled.h3`
    margin: 0;
    font-size: 18px;
    font-weight: 600;
`;

interface CreateFormCardProps {
    onClick: () => void;
}

export const CreateFormCard: React.FC<CreateFormCardProps> = ({ onClick }) => {
    return (
        <>
            <Card onClick={onClick}>
                <CreateWrapper>
                    <CreateIcon>+</CreateIcon>
                    <CreateText>Create New Form</CreateText>
                </CreateWrapper>
            </Card>
        </>
    );
};