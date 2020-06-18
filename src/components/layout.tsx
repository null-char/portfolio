import React from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import theme from "@/themes/theme"
import device from "@/utils/media"

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
    overflow-x: hidden;
  }

  #smooth-scroll {
    width: 100vw;
    height: 100vh;
    overflow: auto;
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
