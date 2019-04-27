import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import mq from "../styles/responsive"

const menu = theme => css`
  width: 100%;
  position: absolute;
  top: ${theme.header.height.small};
  left: 0;
  z-index: 1;
  background-color: ${theme.colors.primary};

  ${mq("mediumUp")} {
    width: auto;
    position: relative;
    top: unset;
    left: unset;
    background-color: transparent;
  }
`

const menuItems = theme => css`
  display: flex;
  flex-direction: column;
  margin: 0;
  list-style: none;

  ${mq("mediumUp")} {
    flex-direction: row;
  }

  li {
    margin: 0;
    text-align: center;

    ${mq("mediumUp")} {
      margin-left: 35px;
    }
  }

  li:first-of-type {
    ${mq("mediumUp")} {
      margin-left: 0;
    }
  }
`

const menuItem = theme => css`
  width: 100%;
  height: 100%;
  color: ${theme.colors.hover};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  transition: color 0.4s ease;
  padding: 5px 0;
  border-bottom: none;
  border-top: 1px solid ${theme.colors.hover};
  display: none;

  ${mq("mediumUp")} {
    display: inline-block;
    padding: 0;
    border-top: none;
    font-size: 17px;
  }

  &:hover {
    ${mq("mediumUp")} {
      color: white;
    }
  }

  &.active {
    color: white;

    ${mq("mediumUp")} {
      border-bottom: 1px solid black;
    }
  }
`

const items = [
  { to: "/sobre/", label: "Sobre" },
  { to: "/exames/", label: "Exames" },
  { to: "/tratamentos/", label: "Tratamentos" },
  { to: "/artigos/", label: "Artigos" },
  { to: "/contato/", label: "Contato" },
]

const Menu = () => (
  <nav css={menu}>
    <ul css={menuItems}>
      {items.map(item => (
        <li key={item.to}>
          <Link to={item.to} css={menuItem} activeClassName={"active"}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Menu
