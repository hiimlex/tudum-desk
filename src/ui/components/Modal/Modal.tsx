import {
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalWrapper,
} from "./Modal.styles";

import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { ModalService } from "../../../core";

export interface ModalProps {
  id: string;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  show: boolean;
  width?: React.CSSProperties["width"];
  zIndex?: number;
  shouldDestroyOnClose?: boolean;
}

const Modal = ({
  id,
  children,
  title,
  onClose,
  show,
  width = 460,
  shouldDestroyOnClose,
}: ModalProps) => {
  useEffect(() => {
    document.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    });
  });

  useEffect(() => {
    if (shouldDestroyOnClose) {
      ModalService.removeModalById(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

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
