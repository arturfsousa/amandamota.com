import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

const head = theme => css`
  font-family: ${theme.typography.antonio};
  font-weight: 300;
  font-size: 2.68rem;
  color: ${theme.colors.dark};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${theme.colors.gray["100"]};
  padding: 0 0 30px 0;
  margin: 0 0 30px 0;
`

const circle = theme => css`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${theme.colors.hover};
  display: inline-block;
  margin: 0 15px;
`

const circleLg = theme => css`
  ${circle(theme)};
  width: 15px;
  height: 15px;
`

const text = css`
  margin: 0 20px;
`

const Head = ({ children }) => (
  <h1 css={head}>
    <i css={circleLg} />
    <i css={circle} />
    <span css={text}>{children}</span>
    <i css={circle} />
    <i css={circleLg} />
  </h1>
)

Head.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Head
