import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import bgHome from "../images/bg-home.png"

const IndexPage = () => (
  <Layout bgImage={bgHome}>
    <SEO />
    Hello man
  </Layout>
)

export default IndexPage
