import "styled-components";
import { GlobalTheme } from "./theme";

declare module "styled-components" {
  type ThemeType = typeof GlobalTheme;

  export interface DefaultTheme extends ThemeType {};
};
