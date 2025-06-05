import { useFormStore } from "@/store";
import DraggableElement from "../DraggableElement"
import DroppableArea from "../DroppableArea"
import {
  StyledMainBuilderContainer,
  StyledMainBuilderHeader,
  StyledMainDescription,
  StyledMainElementList,
  StyledMainEmptyState,
  StyledMainTitle
} from "./styles"
import { Plus } from "lucide-react";

const BuilderMain = () => {
  const {
    elements,
  } = useFormStore();
  return (
    <StyledMainBuilderContainer>
      <StyledMainBuilderHeader>
        <StyledMainTitle>Form Builder</StyledMainTitle>
        <StyledMainDescription>Drag elements from the sidebar to build your form</StyledMainDescription>
      </StyledMainBuilderHeader>

      <DroppableArea>
        {elements.length === 0 ? (
          <StyledMainEmptyState>
            <Plus size={48} />
            <p>Drag form elements here to start building</p>
          </StyledMainEmptyState>
        ) : (
          <StyledMainElementList>
            {elements.map((element, index) => (
              <DraggableElement key={element.id} element={element} index={index} />
            ))}
          </StyledMainElementList>
        )}
      </DroppableArea>
    </StyledMainBuilderContainer>

  )
}

export default BuilderMain