import React from 'react';
import { StyledModalCloseButton, StyledModalOverlay, StyledModalWrapper } from './styles';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <StyledModalOverlay onClick={onClose}>
      <StyledModalWrapper onClick={(e) => e.stopPropagation()}>
        <StyledModalCloseButton onClick={onClose}>&times;</StyledModalCloseButton>
        {children}
      </StyledModalWrapper>
    </StyledModalOverlay>
  );
};

export default Modal;
