import React from "react"
import { css } from "@emotion/core"
import { rgba } from "../styles/theme"
import mq from "../styles/responsive"

import iconWhatsApp from "../images/icon-whatsapp.svg"

const button = theme => css`
  display: inline-block;
  height: 48px;
  border: 2px dashed #888;
  border-radius: 40px;
  cursor: pointer;
  transition: color 0.3s ease;
  color: ${theme.colors.dark};

  ${mq("mediumUp")} {
    height: 68px;
  }

  :hover {
    ${mq("mediumUp")} {
      color: ${theme.colors.primary};
    }
  }
`

const buttonContainer = theme => css`
  height: 100%;
  display: inline-flex;
  align-items: center;
  margin: 1px;
  padding: 4px 6px;
  border-radius: 40px;
  background: linear-gradient(
    ${rgba(theme.colors.primary, 0.5)} 50%,
    ${rgba(theme.colors.hover, 0.5)} 50%
  );

  ${mq("mediumUp")} {
    padding: 8px 10px;
  }
`

const buttonIcon = css`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 100%;
  display: block;
  padding: 9px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mq("mediumUp")} {
    width: 46px;
    height: 46px;
  }
`

const buttonLabel = theme => css`
  padding: 0 10px;
  font-family: ${theme.typography.antonio};
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: -0.02rem;
  text-transform: lowercase;

  ${mq("mediumUp")} {
    font-size: 1.4rem;
  }
`

const icons = {
  whatsapp: iconWhatsApp,
}

const Button = ({ children, icon }) => (
  <div css={button}>
    <div css={buttonContainer}>
      {icon && icon in icons && (
        <i css={buttonIcon}>
          <img src={icons[icon]} alt={children} />
        </i>
      )}
      <span css={buttonLabel}>{children}</span>
    </div>
  </div>
)

export default Button
