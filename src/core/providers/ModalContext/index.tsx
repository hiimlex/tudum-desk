import React from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../../ui";
import { ModalWrapper } from "../../../ui/components/Modal/Modal.styles";
import { RootState } from "../../store";

const ModalContext = () => {
  const modals = useSelector((state: RootState) => state.modal.modals);

  const openModal = (): boolean => {
    return modals.some((el) => el.show);
  };

  return (
    <React.Fragment>
      {modals.length > 0 && openModal() && (
        <ModalWrapper>
          {modals.map((modal) => (
            <Modal
              id={modal.id}
              key={modal.title}
              title={modal.title}
              width={modal.width}
              children={modal.children}
              onClose={modal.onClose}
              show={modal.show}
              zIndex={modal.zIndex}
              shouldDestroyOnClose={modal.shouldDestroyOnClose}
            />
          ))}
        </ModalWrapper>
      )}
    </React.Fragment>
  );
};

export default ModalContext;
