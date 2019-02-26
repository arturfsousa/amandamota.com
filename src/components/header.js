import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import logo from "../images/logo.png"
import Menu from "./menu"

const header = css`
  background-color: #80a1d4;
  height: 105px;
`

const gridContainer = css`
  margin: 0 auto;
  max-width: 1024px;
  padding: 1.45rem 1.0875rem;
  height: 100%;
`

const headerContent = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    <div css={[gridContainer, headerContent]}>
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
