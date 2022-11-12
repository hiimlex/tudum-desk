import { useLocation, useNavigate } from "react-router-dom";
import {
  HeaderButton,
  HeaderContainer,
  HeaderLink,
  HeaderLogo,
  HeaderLogoDot,
  HeaderMenu,
  HeaderNav,
} from "./Header.styles";

import { MdClose, MdMinimize } from "react-icons/md";

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

  return (
    <HeaderContainer>
      <HeaderMenu>
        <HeaderButton>
          <MdMinimize size={16}></MdMinimize>
        </HeaderButton>
        <HeaderButton>
          <MdClose size={16}></MdClose>
        </HeaderButton>
      </HeaderMenu>
      <HeaderLogo>
        Tu<HeaderLogoDot>•</HeaderLogoDot>
        <strong>dum</strong>
      </HeaderLogo>
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
      </HeaderNav>
    </HeaderContainer>
  );
};

export { Header };
