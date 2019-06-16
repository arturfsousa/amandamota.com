import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

const root = css`
  flex: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`

const article = css`
  max-height: 405px;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  background-color: white;
  font-size: 0.9375rem;
  color: #838384;
`

const image = css`
  img {
    width: 100%;
  }
`

const head = theme => css`
  font-family: ${theme.typography.antonio};
  font-weight: 700;
  font-size: 1rem;
  color: #34455c;
  text-transform: uppercase;
  padding-bottom: 10px;
  margin: 0;
  border-bottom: 1px solid ${theme.colors.gray["100"]};
`

const body = css`
  padding: 15px;

  p {
    padding: 10px 0 0;
    margin: 0;
  }
`

const GalleryItem = ({ title, description, imageUrl, url }) => (
  <div css={root}>
    <a href={url || "#"}>
      <article css={article}>
        {imageUrl && (
          <div css={image}>
            <img src={imageUrl} alt={title} />
          </div>
        )}
        <div css={body}>
          <h2 css={head}>{title}</h2>
          {description && <p>{description}</p>}
        </div>
      </article>
    </a>
  </div>
)

GalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  url: PropTypes.string,
}

export default GalleryItem
