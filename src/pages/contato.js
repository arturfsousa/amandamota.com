import React from "react"
import { css } from "@emotion/core"
import { PhoneAndroid, MailOutline, Business } from "@material-ui/icons"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Head from "../components/Head"

const section = theme => css`
  text-align: center;
  font-size: 1rem;
  margin-top: 40px;

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 30px 0;

    svg {
      font-size: 30px;
      fill: ${theme.colors.primary};
    }

    span {
      margin-top: 15px;
    }
  }
`

const ContatoPage = () => (
  <Layout>
    <SEO title="Contato" />
    <Head>Contato</Head>
    <section css={section}>
      <p>
        <PhoneAndroid />
        <span>(21) 2512-8470 | (21) 98889-5939</span>
      </p>
      <p>
        <MailOutline />
        <span>amandamotadermatologia@gmail.com</span>
      </p>
      <p>
        <Business />
        <span>
          Rua General Garzon, 22 - Sala 403 - Jd. Botânico | CEP: 22470-010
        </span>
      </p>
    </section>
  </Layout>
)

export default ContatoPage
