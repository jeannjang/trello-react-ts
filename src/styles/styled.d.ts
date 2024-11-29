import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
  }
}

declare module "styled-components" {
  export interface AccentedTheme {
    accentRed: string;
  }
}
