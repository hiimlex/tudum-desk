import { useLocation, useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderLink, HeaderNav } from "./Header.styles";

import { AuthService } from "../../../core";
import { AppBar } from "../AppBar";
import { HeaderLogo } from "../HeaderLogo";

type NavLink = {
  pathname: string;
  label: string;
};

const Header = () => {
  const links: NavLink[] = [
    { pathname: "/", label: "Notes" },
    { pathname: "/tasks", label: "Tasks" },
    { pathname: "/profile", label: "User" },
  ];

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/login");
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
        <HeaderLink active={false} onClick={handleLogout}>
          Logout
        </HeaderLink>
      </HeaderNav>
    </HeaderContainer>
  );
};

export { Header };
