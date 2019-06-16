import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { StaticQuery, graphql } from "gatsby"

import Header from "./Header"
import theme from "../styles/theme"
import mq from "../styles/responsive"

import "../styles/reset.css"
import "../styles/fonts.css"
import "../styles/base.css"

const background = image => theme =>
  css`
    background: #f3f5f3 url(${image.small || image.default}) no-repeat bottom
      130px right;
    background-size: contain;
    position: fixed;
    top: ${theme.header.height.small};
    left: 0;
    height: 100vh;
    width: 100%;

    ${mq("mediumUp")} {
      top: ${theme.header.height.large};
      background-image: url(${image.large || image.default});
      background-position: bottom 160px right;
    }

    ${mq("largeUp")} {
      background-size: cover;
      background-position: center center;
    }
  `

const main = theme => css`
  position: relative;
  margin: 0 auto;
  max-width: ${theme.grid.maxWidth};
  padding: 1.5rem ${theme.grid.colPadding} 1.5rem;
`

const Layout = ({ children, bgImage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Header siteName={data.site.siteMetadata.siteName} />
        {bgImage && <div css={background(bgImage)} />}
        <main css={main}>{children}</main>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  bgImage: PropTypes.string,
}

export default Layout
