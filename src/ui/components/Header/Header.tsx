import { useLocation, useNavigate } from "react-router-dom";
import {
  HeaderButton,
  HeaderContainer,
  HeaderLink,
  HeaderMenu,
  HeaderNav,
} from "./Header.styles";

import { MdClose, MdMinimize, MdOutlinePalette } from "react-icons/md";
import { useDispatch } from "react-redux";
import { showThemeModal } from "../../../core/store/slicers";
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
  const dispatch = useDispatch();

  const handleShowThemeModal = () => {
    dispatch(showThemeModal());
  };

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
