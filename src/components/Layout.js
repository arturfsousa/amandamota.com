import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { StaticQuery, graphql } from "gatsby"

import mq from "../styles/responsive"

import Header from "./Header"
import theme from "../styles/theme"

import "../styles/reset.css"
import "../styles/fonts.css"

const main = theme => css`
  position: relative;
  margin: 0 auto;
  max-width: ${theme.grid.maxWidth};
  padding: 1.5rem;
  padding-top: 95px;
  padding-bottom: 60px;

  ${mq("mediumUp")} {
    padding: 1.5rem ${theme.grid.colPadding} 60px;
  }
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
        <Global
          styles={css`
            body {
              background-color: ${theme.colors.gray[50]};
              color: ${theme.colors.dark};
            }

            a {
              color: ${theme.colors.strong};
              transition: color 0.4s ease;

              &:hover {
                color: ${theme.colors.primary};
              }
            }
          `}
        />
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
