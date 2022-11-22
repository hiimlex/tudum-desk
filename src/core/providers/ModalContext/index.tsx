import React from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../../ui";
import { RootState } from "../../store";

const ModalContext = () => {
  const modals = useSelector((state: RootState) => state.modal.modals);

  return (
    <React.Fragment>
      {modals.length > 0 &&
        modals.map((modal) => (
          <Modal
            id={modal.id}
            key={modal.title}
            title={modal.title}
            width={modal.width}
            children={modal.children}
            onClose={modal.onClose}
            show={modal.show}
          />
        ))}
    </React.Fragment>
  );
};

export default ModalContext;
