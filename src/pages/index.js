import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

import bgHome from "../images/bg-home.png"
import btSchedule from "../images/bt-schedule.png"

const scheduleButton = css`
  position: absolute;
  top: 465px;
  left: 0;
`

const IndexPage = () => (
  <Layout bgImage={bgHome}>
    <SEO />
    <a href="#" css={scheduleButton}>
      <img src={btSchedule} alt="Agende uma consulta" />
    </a>
  </Layout>
)

export default IndexPage
