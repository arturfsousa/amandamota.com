import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { StaticQuery, graphql } from "gatsby"

import Header from "./Header"
import theme from "../styles/theme"

import "../styles/reset.css"
import "../styles/fonts.css"
import "../styles/base.css"

const main = theme => css`
  position: relative;
  margin: 0 auto;
  max-width: ${theme.grid.maxWidth};
  padding: 1.5rem ${theme.grid.colPadding} 1.5rem;
`

const Layout = ({ children }) => (
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
        <main css={main}>{children}</main>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
