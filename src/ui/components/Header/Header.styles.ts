import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 82px;
  width: 100%;
  background: ${({ theme }) => theme.primary};
  display: flex;
  padding: 24px;
  align-items: flex-end;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
  position: relative;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  position: fixed;
  top: 0;
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
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
