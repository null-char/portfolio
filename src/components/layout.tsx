import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import theme from "@/themes/theme"
import device from "@/utils/media"
import { SMOOTH_SCROLL_ID } from "@/utils/constants"

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Fira Sans, sans-serif;
    font-weight: 700;
  }

  html, body {
    font-size: 10px;
    font-family: Montserrat, sans-serif;
    overflow-x: hidden;

    @media ${device.laptop} {
      font-size: 12px;
    }

    @media ${device.laptopL} {
      font-size: 14px;
    }

    @media ${device.desktop} {
      font-size: 16px;
    }

    @media ${device.desktopL} {
      font-size: 20px;
    }
  }

  body {
    position: relative;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    width: 100%;
  }
  
   #${SMOOTH_SCROLL_ID} {
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .scrollbar-track-y {
    width: 3px !important;

    @media ${device.tablet} {
      width: 5px !important;
    }

    @media ${device.tabletL} {
      width: 8px !important;
    }
  }
`

const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
