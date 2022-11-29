import {
  AppButton,
  AppMenu,
  AppMenuButtons,
  DraggableArea,
} from "./AppBar.styles";

import { MdClose, MdMinimize } from "react-icons/md";

const AppBar = () => {
  return (
    <AppMenu>
      <DraggableArea></DraggableArea>
      <AppMenuButtons>
        <AppButton>
          <MdMinimize size={18}></MdMinimize>
        </AppButton>
        <AppButton close={true}>
          <MdClose size={18}></MdClose>
        </AppButton>
      </AppMenuButtons>
    </AppMenu>
  );
};

export { AppBar };
