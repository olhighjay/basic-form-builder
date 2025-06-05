import { elementTemplates } from "@/constants";
import SidebarElement from "./Element";
import { StyledElementsWrapper, StyledHeading, StyledInnerContainer, StyledSidebarContainer } from "./styles";

const Sidebar = ({ }) => {

    return (
        <StyledSidebarContainer>
            <StyledInnerContainer>
                <StyledHeading>Form Elements</StyledHeading>
                <StyledElementsWrapper>
                    {elementTemplates.map((template) => (
                        <SidebarElement key={template.type} template={template} />
                    ))}
                </StyledElementsWrapper>
            </StyledInnerContainer>
            {/* <PropertyPanelWrapper> */}
            {/* <PropertyPanel /> */}
            {/* </PropertyPanelWrapper> */}
        </StyledSidebarContainer>
    );
};

export default Sidebar