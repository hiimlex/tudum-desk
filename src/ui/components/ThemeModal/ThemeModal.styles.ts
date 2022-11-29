import styled from "styled-components";
import {
  RegisterThemeSelect,
  RegisterThemeSelectContainer
} from "../../screens/Register/Register.styles";

export const ThemeModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.textLighter};
`;

export const ThemeModalSubtitle = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const ThemeModalSelect = RegisterThemeSelect;
export const ThemeModalSelectContainer = RegisterThemeSelectContainer;
