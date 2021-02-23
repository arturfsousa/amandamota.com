import React from "react"
import { css } from "@emotion/core"
import {
  Public as PublicIcon,
  PictureAsPdf as PictureAsPdfIcon,
} from "@material-ui/icons"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Head from "../components/Head"

import articleFile1 from "../data/articles/abd-90-02-0280_penfigoide.pdf"
import articleFile2 from "../data/articles/abd-89-05-0825_bowen.pdf"
import articleFile3 from "../data/articles/0365-0596-abd-88-4-0652_bulosediabeticorum.pdf"
import articleFile4 from "../data/articles/dpc0304a03_retiformhemangioendothelioma.pdf"
import articleFile5 from "../data/articles/0365-0596-abd-88-06-s1-0078_esclerosesistemica.pdf"
import articleFile6 from "../data/articles/0365-0596-abd-88-06-s1-0143_liquenaureus.pdf"
import articleFile7 from "../data/articles/0365-0596-abd-88-05-0793_dermatofibroma.pdf"

const LATES_URL = "http://lattes.cnpq.br/7482608959301965"

const section = css`
  margin-top: 30px;

  a {
    font-weight: 700;
  }
`

const articleLinks = css`
  display: flex;
  align-items: center;
  margin-top: 10px;

  a + a {
    margin-left: 8px;
  }

  svg {
    width: 0.9em;
  }
`

const Article = ({ children, url, fileUrl }) => {
  return (
    <p>
      {children}
      <div css={articleLinks}>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <PublicIcon />
          </a>
        )}
        {fileUrl && (
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            <PictureAsPdfIcon />
          </a>
        )}
      </div>
    </p>
  )
}

const ArtigosPage = () => (
  <Layout>
    <SEO title="Artigos" />
    <Head>Artigos</Head>
    <section css={section}>
      <Article
        url="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4371687/"
        fileUrl={articleFile1}
      >
        TARAZONA, MONICA JIDID MATEUS;{" "}
        <a href={LATES_URL} target="_blank" rel="noopener noreferrer">
          MOTA, AMANDA NASCIMENTO CAVALLEIRO DE MAC;
        </a>{" "}
        GRIPP, ALEXANDRE CARLOS; UNTERSTELL, NATASHA; BRESSAN, ALINE LOPES.
        Bullous pemphigoid and neurological disease: statistics from a
        dermatology service. Anais Brasileiros de Dermatologia (Online), v. 90,
        p. 280-282, 2015.
      </Article>
      <Article
        url="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4155968/"
        fileUrl={articleFile2}
      >
        <a href={LATES_URL} target="_blank" rel="noopener noreferrer">
          MOTA, AMANDA NASCIMENTO CAVALLEIRO DE MAC;
        </a>{" "}
        PIÑEIRO-MACEIRA, JUAN; ALVES, MARIA DE FATIMA GUIMARÃES SCOTELARO;
        TARAZONA, MÓNICA JIDID MATEUS. Pigmented Bowen's disease. Anais
        Brasileiros de Dermatologia (Online), v. 89, p. 825-827, 2014.
      </Article>
      <Article
        url="http://www.scielo.br/scielo.php?script=sci_arttext&pid=S0365-05962013000400652"
        fileUrl={articleFile3}
      >
        <a href={LATES_URL} target="_blank" rel="noopener noreferrer">
          MOTA, AMANDA NASCIMENTO CAVALLEIRO DE MAC;
        </a>{" "}
        NERY, NATALIA SOLON; BARCAUI, CARLOS BAPTISTA. Case for diagnosis. Anais
        Brasileiros de Dermatologia (Online), v. 88, p. 652-654, 2013.
      </Article>
      <Article
        url="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3839825/"
        fileUrl={articleFile4}
      >
        <a href={LATES_URL} target="_blank" rel="noopener noreferrer">
          MOTA, AMANDA;
        </a>{" "}
        ARGENZIANO, GIUSEPPE; ZALAUDEK, IRIS; PIANA, SIMONETTA; LONGO, CATERINA;
        MOSCARELLA, ELVIRA; LALLAS, AIMILIOS. Clinical, dermoscopic and
        histopathologic findings of retiform hemangioendothelioma. Dermatology
        Practical & Conceptual, v. 3, p. 11-14, 2013.
      </Article>
      <Article
        url="http://www.scielo.br/scielo.php?script=sci_arttext&pid=S0365-05962013000800078"
        fileUrl={articleFile5}
      >
        MACEDO, PAULA RENAUX WANDERLEY CARATTA;{" "}
        <a href={LATES_URL} target="_blank" rel="noopener noreferrer">
          MOTA, AMANDA NASCIMENTO CAVALLEIRO DE MAC;
        </a>{" "}
        GRIPP, ALEXANDRE CARLOS; ALVES, MARIA DE FATIMA GUIMARAES SCOTELARO;
        KLUMB, EVANDRO MENDES. Diffuse systemic sclerosis with bullous lesions
        without systemic manifestations. Anais Brasileiros de Dermatologia
        (Online), v. 88, p. 78-81, 2013.
      </Article>
      <Article
        url="http://www.scielo.br/scielo.php?script=sci_arttext&pid=S0365-05962013000800143"
        fileUrl={articleFile6}
      >
        TORTELLY, VIOLETA DUARTE; SILVA, ROBERTO SOUTO DA;{" "}
        <a href={LATES_URL} target="_blank" rel="noopener noreferrer">
          MOTA, AMANDA NASCIMENTO CAVALLEIRO DE MAC;
        </a>{" "}
        PINEIRO-MACEIRA, JUAN. Agminate lichen aureus. Anais Brasileiros de
        Dermatologia (Online), v. 88, p. 143-145, 2013.
      </Article>
      <Article
        url="http://www.scielo.br/scielo.php?script=sci_arttext&pid=S0365-05962013000500793&lng=en&nrm=iso&tlng=en"
        fileUrl={articleFile7}
      >
        <a href={LATES_URL} target="_blank" rel="noopener noreferrer">
          MOTA, AMANDA NASCIMENTO C. DE MACEDO;
        </a>{" "}
        TORTELLY, VIOLETA DUARTE; OBADIA, DANIEL LAGO; SILVA, ROBERTO SOUTO DA.
        Atrophic dermatofibroma. Anais Brasileiros de Dermatologia (Online), v.
        88, p. 793-795, 2013.
      </Article>
      <Article url="https://pubmed.ncbi.nlm.nih.gov/32592215/">
        <a href={LATES_URL} target="_blank" rel="noopener noreferrer">
          Mota ANCM, De Carvalho N
        </a>
        , Pellacani G, de Faria PCP, Melo DF, Pineiro-Maceira JM, Barcaui CB.
        Reflectance confocal microscopy in actinic keratosis-Comparison of
        efficacy between cryotherapy protocols. Skin Res Technol. 2020
        Nov;26(6):876-882. doi: 10.1111/srt.12889. Epub 2020 Jun 26. PMID:
        32592215.
      </Article>
      <Article url="https://onlinelibrary.wiley.com/doi/10.1111/srt.12852">
        Concordance among in vivo reflectance confocal microscopy, trichoscopy,
        and histopathology in the evaluation of scalp discoid lupus.
      </Article>
    </section>
  </Layout>
)

export default ArtigosPage
