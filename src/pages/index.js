import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"

import bgHome from "../images/bg-home.png"

const fixedContainer = css`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 80px;
`

const gridContainer = theme => css`
  margin: 0 auto;
  max-width: ${theme.grid.maxWidth};
  display: flex;
  align-items: flex-start;
`

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
