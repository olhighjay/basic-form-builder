import type { SavedForm } from "@/types";
import {
    StyledCardChildrenWrapper,
    StyledCardContainer,
    StyledFormDescription,
    StyledFormTitle
} from "./styles";

interface CardProps {
    onClick: (value?: any) => void;
    children: React.ReactNode;
    title?: string;
    description?: string;
}

export const Card: React.FC<CardProps> = ({ onClick, title, description, children }) => {

    return (
        <StyledCardContainer onClick={() => onClick()}>
            {title && <StyledFormTitle>{title}</StyledFormTitle>}
            {description &&
                <StyledFormDescription>
                    {description}
                </StyledFormDescription>
            }
            <StyledCardChildrenWrapper>
                {children}
            </StyledCardChildrenWrapper>
        </StyledCardContainer>
    );
};