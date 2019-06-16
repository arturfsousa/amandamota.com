import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import mq from "../styles/responsive"

const body = css`
  padding-bottom: 20px;
  display: grid;
  grid-gap: 30px;
`

const nav = css`
  padding-bottom: 20px;

  ul {
    list-style: none;
    margin: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 0;
    display: flex;
    cursor: pointer;
  }
`

const navBullet = theme => css`
  border-radius: 50%;
  background-color: ${theme.colors.gray[200]};
  display: inline-block;
  margin: 0 6px;
  width: 12px;
  height: 12px;
  transition: 0.3s all;

  &:hover {
    background-color: ${theme.colors.hover};
  }
`

const navBulletActive = theme => css`
  ${navBullet(theme)};
  width: 15px;
  height: 15px;
  background-color: ${theme.colors.primary};
`

const Gallery = ({ children }) => (
  <section>
    <div css={body}>{children}</div>
    {children.length > 1 && (
      <nav css={nav}>
        <ul>
          {children.map((_, i) => (
            <li key={`gallery-nav-${i}`}>
              <i css={i === 0 ? navBulletActive : navBullet} />
            </li>
          ))}
        </ul>
      </nav>
    )}
  </section>
)

Gallery.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Gallery
