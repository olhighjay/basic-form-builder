import { useFormStore } from "@/store";
import { StyledDroppableArea } from "./styles";
import { useDrop } from "react-dnd";
import type { FormElement } from "@/store/types";
import { useRef } from "react";

const DroppableArea = ({ children }: { children: React.ReactNode }) => {
  const { addElement } = useFormStore();
  const dropRef = useRef<HTMLDivElement>(null);

  const [{ isOver }, drop] = useDrop({
    accept: 'sidebar-element',
    drop: (item: FormElement) => {
      const newElement = {
        id: `element-${Date.now()}`,
        type: item.type,
        label: `${item.label} Field`,
        placeholder: `Enter ${item.label.toLowerCase()}`,
        required: false,
        options: item.type === 'select' || item.type === 'radio' ? ['Option 1', 'Option 2', 'Option 3'] : undefined,
        gridColumn: 1
      };
      addElement(newElement);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

  drop(dropRef);

  return (
    <StyledDroppableArea
      ref={dropRef}
      $isOver={isOver}>
      {children}
    </StyledDroppableArea>
  );
};

export default DroppableArea