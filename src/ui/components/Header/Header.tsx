import { useLocation, useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderLink, HeaderNav } from "./Header.styles";

import { AuthService, useModal } from "../../../core";
import { AppBar } from "../AppBar";
import { HeaderLogo } from "../HeaderLogo";

import { MdLogout, MdOutlinePalette } from "react-icons/md";
import { ThemeModal } from "../ThemeModal";

type NavLink = {
  pathname: string;
  label: string;
};

const Header = () => {
  const links: NavLink[] = [
    { pathname: "/", label: "notes" },
    { pathname: "/tasks", label: "tasks" },
    { pathname: "/profile", label: "user" },
  ];

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/login");
  };

  const { create: createModal } = useModal();

  const handleCreateThemeModal = () => {
    createModal({
      children: <ThemeModal />,
      id: "theme-modal",
      title: "theme settings",
      onClose: () => null,
      shouldDestroyOnClose: true,
      show: true,
      width: "45%",
    });
  };

  return (
    <HeaderContainer>
      <AppBar />
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
        <HeaderLink active={false} onClick={handleCreateThemeModal}>
          <MdOutlinePalette size={18}></MdOutlinePalette>
        </HeaderLink>
        <HeaderLink active={false} onClick={handleLogout}>
          <MdLogout size={18}></MdLogout>
        </HeaderLink>
      </HeaderNav>
    </HeaderContainer>
  );
};

export { Header };
