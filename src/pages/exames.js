import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Head from "../components/Head"

import Gallery from "../components/Gallery"
import GalleryGroup from "../components/GalleryGroup"
import GalleryItem from "../components/GalleryItem"

import imgExam1 from "../data/images/exam-dermatoscopia.jpg"
import imgExam2 from "../data/images/exam-tricoscopia.jpg"
import imgExam3 from "../data/images/exam-biopsia-da-pele-e-couro-cabeludo.jpg"

const galleryItems = [
  [
    {
      title: "Dermatoscopia",
      description:
        "Técnica não invasiva que permite a observação de estruturas da pele que não são observadas a olho nu. Auxilia na diferenciação de lesões malignas e benignas, permitindo diagnósticos mais precisos, evitando-se cirurgias desnecessárias e aumentando a chance da identificação de lesões suspeitas na fase inicial.",
      imageUrl: imgExam1,
    },
    {
      title: "Tricoscopia",
      description:
        "Técnica realizada com dermatoscópio para identificar alterações da haste capilar, padrão da vascularização, pigmentação da pele, números de hastes por folículo e predomínio da área capilar com alterações. Permite o diagnóstico de doenças e o acompanhamento mais detalhado de resposta ao tratamento.",
      imageUrl: imgExam2,
    },
    {
      title: "Biópsia da pele e couro cabeludo",
      description:
        "Em casos específicos, é necessária a realização de biópsia direcionada para obtenção do diagnóstico final. O procedimento é realizado no consultório sob anestesia local e enviado para análise pelo dermatopatologista.",
      imageUrl: imgExam3,
    },
  ],
]

const ExamesPage = () => (
  <Layout>
    <SEO title="Exames" />
    <Head>Exames</Head>
    <Gallery>
      {galleryItems.map((group, i) => (
        <GalleryGroup key={`gallery-group-${i}`}>
          {group.map(item => (
            <GalleryItem
              key={item.title}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </GalleryGroup>
      ))}
    </Gallery>
  </Layout>
)

export default ExamesPage
