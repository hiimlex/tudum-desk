import {
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalHeader,
  ModalTitle,
} from "./Modal.styles";

import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useModal } from "../../../core";

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
  zIndex,
}: ModalProps) => {
  const modalService = useModal();

  useEffect(() => {
    document.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    });
  });

  const handleOnClose = () => {
    modalService.hide(id);

    if (shouldDestroyOnClose) {
      modalService.destroy(id);
    }

    onClose();
  };

  return (
    <>
      {show && (
        <ModalContainer style={{ width, zIndex }}>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <ModalClose>
              <MdClose onClick={handleOnClose} />
            </ModalClose>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContainer>
      )}
    </>
  );
};

export { Modal };
