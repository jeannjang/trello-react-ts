import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    cardColor: string;
    boardColor: string;
  }
}

declare module "styled-components" {
  export interface AccentedTheme {
    accentRed: string;
  }
}
