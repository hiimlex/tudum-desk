import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 72px;
  width: 100%;
  background: ${({ theme }) => theme.primary};
  display: flex;
  padding: 12px 24px;
  align-items: flex-end;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
  -webkit-app-region: drag;
  position: relative;
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  -webkit-app-region: no-drag !important;
`;

type HeaderLinkProps = {
  active: boolean;
};

export const HeaderLink = styled.span<HeaderLinkProps>`
  margin: 0 12px;
  font-size: 16px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #5a5b5c;

  ${({ active }) => active && `font-weight: 600 !important;`}

  &:hover {
    cursor: pointer;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  position: absolute;
  z-index: 99;
  top: 0;
  right: 0;
  -webkit-app-region: no-drag;
`;
export const HeaderButton = styled.span`
  display: flex;
  align-items: flex-start;
  transition: all 0.2s ease-in-out;
  padding: 2px 8px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
