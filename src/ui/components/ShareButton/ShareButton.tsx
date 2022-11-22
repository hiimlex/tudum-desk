import React, { useState } from "react";
import {
  ActionButtonContainer,
  ShareButtonContainer,
} from "./ShareButton.styles";

import { MdAdd, MdOutlinePushPin, MdOutlineCheckBox } from "react-icons/md";

const ShareButton = () => {
  const [showShareButtons, setShowShareButtons] = useState(false);
  const [hideAnimation, setHideAnimation] = useState(false);

  const handleShowShareButtons = (e: React.MouseEvent<HTMLDivElement>) => {
    createRipple(e);

    setShowShareButtons((curr) => {
      if (curr) {
        setHideAnimation(true);

        setTimeout(() => {
          setShowShareButtons(false);
          setHideAnimation(false);
        }, 200);

        return curr;
      }

      return !curr;
    });
  };

  const createRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const button = e.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${e.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);

    setTimeout(() => {
      const ripple = button.getElementsByClassName("ripple")[0];

      if (ripple) {
        ripple.remove();
      }
    }, 500);
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
          className={hideAnimation ? "hide-animation" : ""}
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
          className={hideAnimation ? "hide-animation" : ""}
        >
          <MdOutlineCheckBox size={20}></MdOutlineCheckBox>
        </ActionButtonContainer>
      )}
    </>
  );
};

export { ShareButton };
