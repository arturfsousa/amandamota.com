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
  top: 100px;

  ${mq("mediumUp")} {
    bottom: 80px;
    top: initial;
  }
`

const gridContainer = theme => css`
  margin: 0 auto;
  max-width: ${theme.grid.maxWidth};
  padding: 0 ${theme.grid.colPadding};
  display: flex;
  align-items: flex-start;
  justify-content: center;

  ${mq("mediumUp")} {
    justify-content: flex-start;
  }
`

const bgImage = theme =>
  css`
    background: #f3f5f3 url(${bgHomeSmall}) no-repeat bottom right;
    background-size: contain;
    position: fixed;
    // top: ${theme.header.height.small};
    bottom: 60px;
    left: 0;
    height: 400px;
    width: 100%;

    ${mq("mediumUp")} {
      // top: ${theme.header.height.large};
      background-image: url(${bgHomeLarge});
      // background-position: bottom 160px right;
      height: 400px;
    }

    ${mq("largeUp")} {
      background-size: cover;
      background-position: center center;
      height: 100vh;
      top: ${theme.header.height.large};
      bottom: initial;
    }
  `

const whatsAppNumber = "5521995392015"
const whatsAppMessage = encodeURIComponent(
  "Olá Dr. Amanda! Gostaria de agendar uma consulta."
)
const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${whatsAppMessage}`

const IndexPage = () => (
  <Layout>
    <SEO />
    <div css={bgImage} />
    <div css={fixedContainer}>
      <div css={gridContainer}>
        <Button icon="whatsapp" url={whatsAppUrl}>
          Agende uma consulta
        </Button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
