import { useState } from "react";
import {
  ActionButtonContainer,
  ShareButtonContainer,
} from "./ShareButton.styles";

const ShareButton = () => {
  const [showShareButtons, setShowShareButtons] = useState(false);
  const [hideAnimation, setHideAnimation] = useState(false);

  const handleShowShareButtons = () => {
    setHideAnimation((curr) => !curr);

    if (!hideAnimation) {
      setTimeout(() => {
        setShowShareButtons((curr) => !curr);
      }, 200);
    } else {
      setShowShareButtons((curr) => !curr);
    }
  };

  return (
    <>
      <ShareButtonContainer onClick={handleShowShareButtons}>
        +
      </ShareButtonContainer>
      {showShareButtons && (
        <ActionButtonContainer right={24} bottom={84} color="secondary">
          N
        </ActionButtonContainer>
      )}
      {showShareButtons && (
        <ActionButtonContainer right={84} bottom={24} color="secondary">
          T
        </ActionButtonContainer>
      )}
    </>
  );
};

export { ShareButton };
