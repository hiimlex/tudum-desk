import React, { useState } from "react";
import {
  ActionButtonContainer,
  ShareButtonContainer,
} from "./ShareButton.styles";

import { MdAdd, MdOutlinePushPin, MdOutlineCheckBox } from "react-icons/md";

const ShareButton = () => {
  const [showShareButtons, setShowShareButtons] = useState(false);

  const handleShowShareButtons = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowShareButtons((curr) => !curr);
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
        >
          <MdOutlineCheckBox size={20}></MdOutlineCheckBox>
        </ActionButtonContainer>
      )}
    </>
  );
};

export { ShareButton };
