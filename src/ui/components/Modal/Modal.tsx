import {
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalWrapper,
} from "./Modal.styles";

import { MdClose } from "react-icons/md";

export interface ModalProps {
  title: string;
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
  width?: React.CSSProperties["width"];
}

const Modal = ({ children, show, title, onClose, width = 460 }: ModalProps) => {
  return (
    <ModalWrapper>
      {show && (
        <ModalContainer style={{ width }}>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <ModalClose>
              <MdClose onClick={onClose} />
            </ModalClose>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContainer>
      )}
    </ModalWrapper>
  );
};

export { Modal };
