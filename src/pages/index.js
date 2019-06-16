import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Button from "../components/Button"
import mq from "../styles/responsive"

import bgHomeLarge from "../images/bg-home.png"
import bgHomeSmall from "../images/bg-home-sm.png"

const fixedContainer = css`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 80px;

  ${mq("mediumUp")} {
    bottom: 80px;
  }
`

const gridContainer = theme => css`
  margin: 0 auto;
  max-width: ${theme.grid.maxWidth};
  padding: 0 ${theme.grid.colPadding};
  display: flex;
  align-items: flex-start;
`

const bgImage = theme =>
  css`
    background: #f3f5f3 url(${bgHomeSmall}) no-repeat bottom 130px right;
    background-size: contain;
    position: fixed;
    top: ${theme.header.height.small};
    left: 0;
    height: 100vh;
    width: 100%;

    ${mq("mediumUp")} {
      top: ${theme.header.height.large};
      background-image: url(${bgHomeLarge});
      background-position: bottom 160px right;
    }

    ${mq("largeUp")} {
      background-size: cover;
      background-position: center center;
    }
  `

const IndexPage = () => (
  <Layout>
    <SEO />
    <div css={bgImage} />
    <div css={fixedContainer}>
      <div css={gridContainer}>
        <Button icon="whatsapp">Agende uma consulta</Button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
