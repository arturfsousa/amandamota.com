import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Head from "../components/Head"

const section = theme => css`
  margin-top: 30px;

  a {
    font-weight: 700;
  }
`

const LATES_URL = "http://lattes.cnpq.br/7482608959301965"

const ArtigosPage = () => (
  <Layout>
    <SEO title="Artigos" />
    <Head>Artigos</Head>
    <section css={section}>
      <p>
        TARAZONA, MONICA JIDID MATEUS;{" "}
        <a href={LATES_URL}>MOTA, AMANDA NASCIMENTO CAVALLEIRO DE MAC;</a>{" "}
        GRIPP, ALEXANDRE CARLOS; UNTERSTELL, NATASHA; BRESSAN, ALINE LOPES.
        Bullous pemphigoid and neurological disease: statistics from a
        dermatology service. Anais Brasileiros de Dermatologia (Online), v. 90,
        p. 280-282, 2015.
      </p>
      <p>
        <a href={LATES_URL}>MOTA, AMANDA NASCIMENTO CAVALLEIRO DE MAC;</a>{" "}
        PIÑEIRO-MACEIRA, JUAN; ALVES, MARIA DE FATIMA GUIMARÃES SCOTELARO;
        TARAZONA, MÓNICA JIDID MATEUS. Pigmented Bowen's disease. Anais
        Brasileiros de Dermatologia (Online), v. 89, p. 825-827, 2014.
      </p>
      <p>
        <a href={LATES_URL}>MOTA, AMANDA NASCIMENTO CAVALLEIRO DE MAC;</a> NERY,
        NATALIA SOLON; BARCAUI, CARLOS BAPTISTA. Case for diagnosis. Anais
        Brasileiros de Dermatologia (Online), v. 88, p. 652-654, 2013.
      </p>
      <p>
        <a href={LATES_URL}>MOTA, AMANDA;</a> ARGENZIANO, GIUSEPPE; ZALAUDEK,
        IRIS; PIANA, SIMONETTA; LONGO, CATERINA; MOSCARELLA, ELVIRA; LALLAS,
        AIMILIOS. Clinical, dermoscopic and histopathologic findings of retiform
        hemangioendothelioma. Dermatology Practical & Conceptual, v. 3, p.
        11-14, 2013.
      </p>
      <p>
        MACEDO, PAULA RENAUX WANDERLEY CARATTA;{" "}
        <a href={LATES_URL}>MOTA, AMANDA NASCIMENTO CAVALLEIRO DE MAC;</a>{" "}
        GRIPP, ALEXANDRE CARLOS; ALVES, MARIA DE FATIMA GUIMARAES SCOTELARO;
        KLUMB, EVANDRO MENDES. Diffuse systemic sclerosis with bullous lesions
        without systemic manifestations. Anais Brasileiros de Dermatologia
        (Online), v. 88, p. 78-81, 2013.
      </p>
      <p>
        TORTELLY, VIOLETA DUARTE; SILVA, ROBERTO SOUTO DA;{" "}
        <a href={LATES_URL}>MOTA, AMANDA NASCIMENTO CAVALLEIRO DE MAC;</a>{" "}
        PINEIRO-MACEIRA, JUAN. Agminate lichen aureus. Anais Brasileiros de
        Dermatologia (Online), v. 88, p. 143-145, 2013.
      </p>
      <p>
        <a href={LATES_URL}>MOTA, AMANDA NASCIMENTO C. DE MACEDO;</a> TORTELLY,
        VIOLETA DUARTE; OBADIA, DANIEL LAGO; SILVA, ROBERTO SOUTO DA. Atrophic
        dermatofibroma. Anais Brasileiros de Dermatologia (Online), v. 88, p.
        793-795, 2013.
      </p>
    </section>
  </Layout>
)

export default ArtigosPage
