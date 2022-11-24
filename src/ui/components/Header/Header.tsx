import { useLocation, useNavigate } from "react-router-dom";
import {
  HeaderButton,
  HeaderContainer,
  HeaderLink,
  HeaderMenu,
  HeaderNav
} from "./Header.styles";

import { MdClose, MdMinimize, MdOutlinePalette } from "react-icons/md";
import { IpcService } from "../../../core";
import { HeaderLogo } from "../HeaderLogo";

type NavLink = {
  pathname: string;
  label: string;
};

const Header = () => {
  const links: NavLink[] = [
    { pathname: "/", label: "Me" },
    { pathname: "/notes", label: "Notes" },
    { pathname: "/tasks", label: "Tasks" },
  ];

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleShowThemeModal = () => {};

  const handleCloseApp = () => {
    IpcService.send("closeMain");
  };

  const handleMinimizeApp = () => {
    IpcService.send("minimizeMain");
  };

  return (
    <HeaderContainer>
      <HeaderMenu>
        <HeaderButton>
          <MdMinimize size={16} onClick={handleMinimizeApp}></MdMinimize>
        </HeaderButton>
        <HeaderButton onClick={handleCloseApp}>
          <MdClose size={16}></MdClose>
        </HeaderButton>
      </HeaderMenu>
      <HeaderLogo />
      <HeaderNav>
        {links &&
          links.map((link) => (
            <HeaderLink
              key={link.pathname}
              active={link.pathname === pathname}
              onClick={() => {
                navigate(link.pathname);
              }}
            >
              {link.label}
            </HeaderLink>
          ))}
        <HeaderLink active={false} onClick={handleShowThemeModal}>
          <MdOutlinePalette size={18}></MdOutlinePalette>
        </HeaderLink>
      </HeaderNav>
    </HeaderContainer>
  );
};

export { Header };

