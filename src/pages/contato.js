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
        <span>(21) 99539-2015</span>
      </p>
      <p>
        <MailOutline />
        <span>amandamotadermatologia@gmail.com</span>
      </p>
      <p>
        <Business />
        <span>
          <a
            href="https://www.google.com/maps/place/R.+Jardim+Bot%C3%A2nico,+674+-+sala+207+-+Jardim+Bot%C3%A2nico,+Rio+de+Janeiro+-+RJ,+22461-000,+Brazil/@-22.9645794,-43.2205535,17z/data=!3m1!4b1!4m5!3m4!1s0x9bd59953155371:0xd85dfbee5e9fa563!8m2!3d-22.9645844!4d-43.2183648"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rua Jardim Botânico 674 Sala 207, Rio De Janeiro, RJ, Brasil
          </a>
        </span>
      </p>
    </section>
  </Layout>
)

export default ContatoPage
