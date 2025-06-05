import styled from 'styled-components';


export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: auto;
`;

export const StyledModalWrapper = styled.div`
  background: ${({theme}) => theme.colors.background.primary};
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: relative;
  max-height: 85vh;
  overflow-y: auto;
`;

export const StyledModalCloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${({theme}) => theme.colors.text.primary};;

  &:hover {
    color: ${({theme}) => theme.colors.text.secondary};
  }
`;