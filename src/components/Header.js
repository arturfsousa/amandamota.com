import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Menu from "./Menu"
import mq from "../styles/responsive"
import logo from "../images/logo.svg"

const header = theme =>
  css`
    background-color: ${theme.colors.primary};
    height: ${theme.header.height.small};
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    ${mq("mediumUp")} {
      height: ${theme.header.height.large};
      position: unset;
    }
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
    width: 180px;
    margin: 0;

    ${mq("mediumUp")} {
      width: 252px;
    }
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
