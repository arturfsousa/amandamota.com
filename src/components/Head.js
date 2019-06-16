import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import mq from "../styles/responsive"

const head = theme => css`
  font-family: ${theme.typography.antonio};
  font-weight: 300;
  font-size: 2.2rem;
  color: ${theme.colors.dark};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${theme.colors.gray["100"]};
  padding: 0 0 20px 0;
  margin: 0 0 20px 0;

  ${mq("mediumUp")} {
    font-size: 2.68rem;
    padding: 0 0 30px 0;
    margin: 0 0 30px 0;
  }
`

const circle = theme => css`
  border-radius: 50%;
  background-color: ${theme.colors.hover};
  display: inline-block;
  margin: 0 10px;
  width: 10px;
  height: 10px;

  ${mq("mediumUp")} {
    margin: 0 15px;
    width: 12px;
    height: 12px;
  }
`

const circleLg = theme => css`
  ${circle(theme)};
  width: 12px;
  height: 12px;

  ${mq("mediumUp")} {
    width: 15px;
    height: 15px;
  }
`

const text = css`
  margin: 0 10px;

  ${mq("mediumUp")} {
    margin: 0 20px;
  }
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
