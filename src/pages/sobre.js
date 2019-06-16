import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Head from "../components/Head"

const section = theme => css`
  margin-top: 60px;
  color: #34455c;
  font-size: 1rem;
  padding: 0 40px;

  strong {
    color: #4770aa;
  }
`

const SobrePage = () => (
  <Layout>
    <SEO title="Sobre" />
    <Head>Sobre</Head>
    <section css={section}>
      <p>
        <strong>Graduação em Medicina</strong> - UFRJ | 2005 - 2010
      </p>
      <p>
        <strong>Residência Médica em Dermatologia</strong> - UERJ | 2011 - 2013
      </p>
      <p>
        <strong>Título de Especialista em Dermatologia</strong> - Associação
        Médica Brasileira/ Sociedade Brasileira de Dermatologia | 2014
      </p>
      <p>
        <strong>Observationship Skin Cancer Unit (Dermatoscopia)</strong> -
        Arcispedale Santa Maria Nuova - Universitá degli studi di Modena e
        Reggio Emilia | Itália, 2013
      </p>
      <p>
        <strong>
          Dermatologista e Preceptora da Residência Médica em Dermatologia
        </strong>{" "}
        - HCA | 2014 - atual
      </p>
      <p>
        <strong>Observationship em Microscopia Confocal</strong> - Azienda
        Ospedaliero-Universitaria di Modena - Universitá degli studi di Modena e
        Reggio Emilia | Itália, 2017
      </p>
      <p>
        <strong>Mestrado em Ciências Médicas</strong> - UERJ | 2016 - 2018
      </p>
    </section>
  </Layout>
)

export default SobrePage
