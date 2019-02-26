import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import logo from "../images/logo.png"
import Menu from "./menu"

const header = theme =>
  css`
    background-color: ${theme.colors.primary};
    height: 105px;
  `

const headerContent = theme => css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  max-width: ${theme.grid.maxWidth};
  padding: 0 ${theme.grid.colPadding};
  height: 100%;
`

const headerLogo = css`
  display: flex;
  align-items: center;

  img {
    margin: 0;
  }
`

const Header = ({ siteName }) => (
  <header css={header}>
    <div css={headerContent}>
      <Link to="/" css={headerLogo}>
        <img src={logo} alt={siteName} />
      </Link>
      <Menu />
    </div>
  </header>
)

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
}

export default Header
