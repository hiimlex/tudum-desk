// styled.d.ts
import "styled-components";
import { ColorsType } from "./ui";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    colors: Record<ColorsType, string>;
  }
}
