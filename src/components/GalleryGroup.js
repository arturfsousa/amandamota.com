import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import mq from "../styles/responsive"

const root = css`
  display: grid;
  grid-gap: 30px;

  ${mq("mediumUp")} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const GalleryGroup = ({ children }) => <div css={root}>{children}</div>

GalleryGroup.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GalleryGroup
