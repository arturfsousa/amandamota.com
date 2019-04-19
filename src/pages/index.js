import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

import bgHome from "../images/bg-home.png"
import btSchedule from "../images/bt-schedule.png"
import iconWhatsApp from "../images/icon-whatsapp.svg"

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

const button = theme => css`
  padding: 9px 12px;
  border: 2px dashed #888;
  display: inline-block;
  border-radius: 40px;
  background-color: ${theme.colors.hover};
  display: flex;
  align-items: center;
  justify-content: center;
`

const buttonIcon = css`
  width: 46px;
  height: 46px;
  background-color: white;
  border-radius: 100%;
  display: block;
  padding: 9px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const buttonLabel = css`
  padding: 0 10px;
`

const IndexPage = () => (
  <Layout bgImage={bgHome}>
    <SEO />
    <div css={fixedContainer}>
      <div css={gridContainer}>
        <div css={button}>
          <i css={buttonIcon}>
            <img src={iconWhatsApp} alt="Agende uma consulta" />
          </i>{" "}
          <span css={buttonLabel}>agende sua consulta</span>
        </div>
        <a href="#">
          <img src={btSchedule} alt="Agende uma consulta" />
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
