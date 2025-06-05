import { useDrag } from "react-dnd";
import { StyledSidebarElementContainer, StyledSidebarElementLabel } from "./styles";
import type { LucideProps } from 'lucide-react';
import { useRef } from "react";

interface SidebarElementProps {
  template: {
    type: string,
    label: string,
    icon: React.FC<LucideProps>;
  };
}
const SidebarElement = ({ template }: SidebarElementProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag({
    type: 'sidebar-element',
    item: { type: template.type, label: template.label },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  drag(containerRef);

  const Icon = template.icon;

  return (
    <StyledSidebarElementContainer
      ref={containerRef}
      $isDragging={isDragging}
    >
      <Icon size={20} />
      <StyledSidebarElementLabel>{template.label}</StyledSidebarElementLabel>
    </StyledSidebarElementContainer>
  );
};

export default SidebarElement