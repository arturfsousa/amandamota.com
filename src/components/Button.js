import React from "react"
import { css } from "@emotion/core"
import { rgba } from "../theme"

import iconWhatsApp from "../images/icon-whatsapp.svg"

const button = theme => css`
  display: inline-block;
  height: 68px;
  border: 2px dashed #888;
  border-radius: 40px;
  cursor: pointer;
  transition: color 0.3s ease;
  color: ${theme.colors.dark};

  :hover {
    color: ${theme.colors.primary};
  }
`

const buttonContainer = theme => css`
  height: 100%;
  display: inline-flex;
  align-items: center;
  margin: 1px;
  padding: 8px 10px;
  border-radius: 40px;
  background: linear-gradient(
    ${rgba(theme.colors.primary, 0.5)} 50%,
    ${rgba(theme.colors.hover, 0.5)} 50%
  );
`

const buttonIcon = css`
  width: 46px;
  height: 46px;
  background-color: white;
  border-radius: 100%;
  display: block;
  padding: 9px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const buttonLabel = theme => css`
  padding: 0 10px;
  font-family: ${theme.typography.antonio};
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: -0.02rem;
  text-transform: lowercase;
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
