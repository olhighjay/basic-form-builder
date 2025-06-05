

import { useDrop, useDrag } from "react-dnd";
import {
  StyledDraggableHeader, StyledDraggableLabel,
  StyledRequiredMark,
  StyledDraggableContainer, StyledRemoveButton,
  StyledEditButton
} from "./styles";
import { Pencil, Trash2 } from 'lucide-react';
import { useFormStore } from "@/store";
import type { FormElement } from "@/store/types";
import { useRef, useState } from "react";
import Modal from "@/components/ui/Modal";
import Settings from "../Settings";
import { StyledFormPreviewSubmitButton } from "../../preview/styles";


type DraggableElementProps = {
  element: FormElement;
  index: number;
}
const DraggableElement = (
  { element, index }: DraggableElementProps
) => {
  const { removeElement, selectElement, selectedElement } = useFormStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [{ isDragging }, drag] = useDrag({
    type: 'form-element',
    item: { id: element.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, drop] = useDrop({
    accept: 'form-element',
    hover: (item: any) => {
      if (item.index !== index) {
        useFormStore.getState().reorderElements(item.index, index);
        item.index = index;
      }
    }
  });

  drag(drop(containerRef));

  const isSelected = selectedElement === element.id;

  return (
    <StyledDraggableContainer
      ref={containerRef}
      $isDragging={isDragging}
      $isSelected={isSelected}
    >
      <StyledDraggableHeader>
        <StyledDraggableLabel>
          {element.label}
          {element.required && <StyledRequiredMark>*</StyledRequiredMark>}
        </StyledDraggableLabel>
        <div>
          <StyledEditButton
            onClick={(e) => {
              e.stopPropagation();
              selectElement(element.id)
              setIsModalOpen(true);
            }}>
            <Pencil size={14} />
          </StyledEditButton>

          <StyledRemoveButton
            onClick={(e) => {
              e.stopPropagation();
              removeElement(element.id);
            }}
          >
            <Trash2 size={14} />
          </StyledRemoveButton>
        </div>
      </StyledDraggableHeader>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Settings</h2>
        <p><b>{element.id}</b></p>
        <Settings />
        <StyledFormPreviewSubmitButton onClick={() => setIsModalOpen(false)}
        >Done
        </StyledFormPreviewSubmitButton>
      </Modal>
    </StyledDraggableContainer>
  );
};

export default DraggableElement