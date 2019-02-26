import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import logo from "../images/logo.png"

const header = css`
  background-color: #80a1d4;
  height: 105px;
`

const gridContainer = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  height: 100%;
`

const headerContent = css`
  display: flex;
  align-items: center;
`

const headerLogo = css`
  display: flex;
  align-items: center;

  img {
    margin: 0;
  }
`

const Header = ({ siteTitle }) => (
  <header css={header}>
    <div css={gridContainer}>
      <div css={headerContent}>
        <Link to="/" css={headerLogo}>
          <img src={logo} alt={siteTitle} />
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
