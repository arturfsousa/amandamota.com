import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import mq from "../styles/responsive"
import {
  Info,
  InsertDriveFile,
  Assignment,
  Spa,
  Mail,
} from "@material-ui/icons"

const menu = theme => css`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: white;

  ${mq("largeUp")} {
    width: auto;
    position: relative;
    top: unset;
    bottom: unset;
    left: unset;
    background-color: transparent;
  }
`

const menuItems = theme => css`
  display: flex;
  margin: 0;
  list-style: none;

  li {
    margin: 0;
    text-align: center;
    flex: 1;

    ${mq("largeUp")} {
      margin-left: 35px;
    }
  }

  li:first-of-type {
    ${mq("largeUp")} {
      margin-left: 0;
    }
  }
`

const menuItem = theme => css`
  width: 100%;
  height: 100%;
  color: #838384;
  text-decoration: none;
  font-size: 9px;
  transition: color 0.4s ease;
  padding: 10px 0;
  border-bottom: none;
  border-top: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${mq("largeUp")} {
    padding: 0;
    border-top: none;
    font-size: 17px;
    color: ${theme.colors.hover};
    text-transform: uppercase;
  }

  &:hover {
    ${mq("largeUp")} {
      color: white;
    }
  }

  &.active {
    color: ${theme.colors.primary};

    ${mq("largeUp")} {
      color: white;
      border-bottom: 1px solid black;
    }
  }
`

const menuLabel = css`
  display: block;
  line-height: 1;
`

const menuIcon = css`
  display: block;
  width: 24px;
  height: 24px;
  margin-bottom: 6px;

  ${mq("largeUp")} {
    display: none;
  }
`

const items = [
  { to: "/sobre/", label: "Sobre", icon: <Info /> },
  { to: "/exames/", label: "Exames", icon: <Assignment /> },
  { to: "/tratamentos/", label: "Tratamentos", icon: <Spa /> },
  { to: "/artigos/", label: "Artigos", icon: <InsertDriveFile /> },
  { to: "/contato/", label: "Contato", icon: <Mail /> },
]

const Menu = () => (
  <nav css={menu}>
    <ul css={menuItems}>
      {items.map(item => (
        <li key={item.to}>
          <Link to={item.to} css={menuItem} activeClassName={"active"}>
            <span css={menuIcon}>{item.icon}</span>
            <span css={menuLabel}>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Menu
