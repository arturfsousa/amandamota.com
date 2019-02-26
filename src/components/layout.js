import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const background = imageUrl =>
  css`
    background: url(${imageUrl}) no-repeat center center;
    background-size: cover;
    position: fixed;
    top: 105px;
    left: 0;
    height: 100vh;
    width: 100%;
  `

const main = css`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 1.0875rem 1.5rem;
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
      <React.Fragment>
        <Header siteName={data.site.siteMetadata.siteName} />
        {bgImage && <div css={background(bgImage)} />}
        <main css={main}>{children}</main>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  bgImage: PropTypes.string,
}

export default Layout
