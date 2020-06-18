import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      background: string
      rgbBackground: string
      text: string
      cardBackground: string
    }
  }
}
