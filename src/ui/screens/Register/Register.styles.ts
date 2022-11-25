import styled from "styled-components";
import {
  LoginButton,
  LoginContainer,
  LoginContent,
  LoginFooter,
  LoginFooterLink,
  LoginForm,
  LoginHeader,
  LoginInput,
  LoginLogo,
  LoginSubtitle,
} from "../Login/Login.styles";

export const RegisterContainer = LoginContainer;
export const RegisterContent = LoginContent;
export const RegisterLogo = LoginLogo;
export const RegisterHeader = LoginHeader;
export const RegisterSubtitle = LoginSubtitle;
export const RegisterForm = LoginForm;
export const RegisterInput = LoginInput;
export const RegisterButton = LoginButton;
export const RegisterFooter = LoginFooter;
export const RegisterFooterLink = LoginFooterLink;

export const RegisterThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  color: ${({ theme }) => theme.textLighter};
`;

export const RegisterThemeLabel = styled.label`
  font-size: 14px;
`;

export const RegisterThemeSelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

export const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 12px;
`;

export const ColorPicker = styled.div<{ color: string }>`
  cursor: pointer;
  margin-right: 12px;
  margin-bottom: 12px;
  width: 22px;
  height: 22px;
  border: 1px solid #ececec;
  border-radius: 50%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ color, theme }) => theme.colors[color]};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transition: all 0.1s ease-in;
  }

  &:hover {
    &::after {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${({ color, theme }) => theme.colors[color]};
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      transition: all 0.1s ease-in;
    }
  }
`;

export const RegisterThemeSelect = styled.div<{
  color: string;
  selected: boolean;
}>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textLighter};
  margin-right: 12px;
  padding: 8px 12px;
  background: ${({ color }) => color};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  ${({ selected }) => selected && "font-weight: 600; transform: scale(1.05);"}
`;
