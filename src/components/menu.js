import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const menuItems = css`
  list-style: none;
  margin: 0;
  display: flex;

  li {
    margin: 0 0 0 35px;
  }

  li:first-child {
    margin-left: 0;
  }
`

const menuItem = css`
  color: #afc8ea;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 17px;
  transition: color 0.4s ease;

  &:hover {
    color: white;
  }
`

const items = [
  { to: "/sobre", label: "Sobre" },
  { to: "/exames", label: "Exames" },
  { to: "/tratamentos", label: "Tratamentos" },
  { to: "/artigos", label: "Artigos" },
  { to: "/contato", label: "Contato" },
]

const Menu = () => (
  <nav>
    <ul css={menuItems}>
      {items.map(item => (
        <li key={item.to}>
          <Link to={item.to} css={menuItem}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Menu
