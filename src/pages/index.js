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

const bgHome = {
  default: bgHomeLarge,
  large: bgHomeLarge,
  small: bgHomeSmall,
}

const IndexPage = () => (
  <Layout bgImage={bgHome}>
    <SEO />
    <div css={fixedContainer}>
      <div css={gridContainer}>
        <Button icon="whatsapp">Agende uma consulta</Button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
