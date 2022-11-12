import { colors } from "./colors";
import { DefaultTheme } from "styled-components";

export type ThemeProps = DefaultTheme;

export const DEFAULT_THEME: ThemeProps = {
  background: "#efefef",
  text: "#3a3b3c",
  primary: colors.yellow,
  secondary: colors.orange,
  colors: colors,
};
