import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  position: relative;
  height: fit-content;
  margin-top: 124px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  width: 100%;
`;

export const ModalTitle = styled.h4`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.textLighter};
`;

export const ModalClose = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  color: ${({ theme }) => theme.textLighter};
  cursor: pointer;
`;

export const ModalBody = styled.div`
  padding: 16px;
  font-size: 14px;
`;
