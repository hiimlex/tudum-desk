import React, { useState } from "react";
import {
  ActionButtonContainer,
  ShareButtonContainer,
} from "./ShareButton.styles";

import { MdAdd, MdOutlinePushPin, MdOutlineCheckBox } from "react-icons/md";
import { useModal } from "../../../core";
import { CreateTaskModal } from "../CreateTaskModal";
import { CreateNoteModal } from "../CreateNoteModal";

const ShareButton = () => {
  const [showShareButtons, setShowShareButtons] = useState(false);
  const { create: createModal } = useModal();

  const handleShowShareButtons = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowShareButtons((curr) => !curr);
  };

  const handleCreateNote = () => {
    createModal({
      id: "create-note",
      children: <CreateNoteModal id="create-note" />,
      onClose: () => null,
      show: true,
      title: "create note",
      width: "45%",
    });

    setShowShareButtons(false);
  };

  const handleCreateTask = () => {
    createModal({
      id: "create-task",
      children: <CreateTaskModal id="create-task" />,
      onClose: () => null,
      show: true,
      title: "create task",
      width: "45%",
    });

    setShowShareButtons(false);
  };

  return (
    <>
      <ShareButtonContainer
        role="button"
        onClick={(e) => handleShowShareButtons(e)}
      >
        <MdAdd size={20}></MdAdd>
      </ShareButtonContainer>
      {showShareButtons && (
        <ActionButtonContainer
          role="button"
          right={24}
          bottom={104}
          color="secondary"
          onClick={handleCreateNote}
        >
          <MdOutlinePushPin size={20}></MdOutlinePushPin>
        </ActionButtonContainer>
      )}
      {showShareButtons && (
        <ActionButtonContainer
          role="button"
          right={104}
          bottom={24}
          color="secondary"
          onClick={handleCreateTask}
        >
          <MdOutlineCheckBox size={20}></MdOutlineCheckBox>
        </ActionButtonContainer>
      )}
    </>
  );
};

export { ShareButton };
