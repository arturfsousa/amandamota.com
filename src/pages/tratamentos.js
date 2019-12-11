import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Head from "../components/Head"

import Gallery from "../components/Gallery"
import GalleryGroup from "../components/GalleryGroup"
import GalleryItem from "../components/GalleryItem"

import imgTreatment1 from "../data/images/treatment-cirurgico-2.jpg"
import imgTreatment2 from "../data/images/treatment-crioterapia-2.jpg"
import imgTreatment3 from "../data/images/treatment-luz-intensa-pulsada-2.jpg"
import imgTreatment4 from "../data/images/treatment-depilacao-a-laser.jpg"
import imgTreatment5 from "../data/images/treatment-skin-booster.jpg"
import imgTreatment6 from "../data/images/treatment-microagulhamento.jpg"
import imgTreatment7 from "../data/images/treatment-drug-delirery.jpg"
import imgTreatment8 from "../data/images/treatment-peeling-quimico.jpg"
import imgTreatment9 from "../data/images/treatment-preenchimento.jpg"
import imgTreatment10 from "../data/images/treatment-fotobioestimulacao.jpg"
import imgTreatment11 from "../data/images/treatment-mesoterapia.jpg"
import imgTreatment12 from "../data/images/treatment-laser.jpg"
import imgTreatment13 from "../data/images/treatment-toxina-botulinica.jpg"

const galleryItems = [
  [
    {
      title: "Cirúrgico",
      description:
        "Remoção de pequenos pólipos, nevos, cistos, eletrocoagulação de verrugas e dermatoses papulosas.",
      imageUrl: imgTreatment1,
    },
    {
      title: "Crioterapia",
      description:
        "Para tratamento de lesões pré malignas e verrugas, através de spray de nitrogênio líquido, de forma rápida, no consultório, evitando-se cortes e prevenindo lesões mais graves.",
      imageUrl: imgTreatment2,
    },
    {
      title: "Luz Intensa Pulsada",
      description:
        "Reduz manchas solares, sardas, trata rugas, poros dilatados e melhora a textura da pele.",
      imageUrl: imgTreatment3,
    },
    {
      title: "Depilação a laser",
      description:
        "Realizado com maior segurança por médico dermatologista para remoção de pelos de forma mais duradoura.",
      imageUrl: imgTreatment4,
    },
    {
      title: "Skin Booster",
      description:
        "Hidratação profunda injetável para melhora da qualidade, firmeza da pele e das rugas finas.",
      imageUrl: imgTreatment5,
    },
    {
      title: "Microagulhamento",
      description:
        "O estímulo produzido pelas agulhas leva à produção de fatores de crescimento que auxiliam no tratamento do melasma, cicatrizes de acne, alopecia e estímulo de colágeno.",
      imageUrl: imgTreatment6,
    },
    {
      title: "Drug delirery",
      description:
        "O uso de tecnologias como o laser fracionado e o microagulhamento aumentam a permeabilidade da pele à penetração de princípios ativos selecionados para proporcionar resultados superiores aos tratamentos tópicos.",
      imageUrl: imgTreatment7,
    },
    {
      title: "Peeling químico",
      description:
        "Indicado para tratamento de manchas na pele, poros dilatados, acne, oleosidade e rejuvenescimento.",
      imageUrl: imgTreatment8,
    },
    {
      title: "Preenchimento",
      description:
        "Indicado para reposicionamento do volume facial, amenizar olheiras, bigode chinês, rugas e aumento labial.",
      imageUrl: imgTreatment9,
    },
    {
      title: "Fotobioestimulação",
      description:
        "Dispomos de equipamento para aplicação de laser diodo de baixa potência associado ao LED para promover vasodilatação, aumentando o aporte de nutrientes aos folículos pilosos, ação antioxidante e anti-inflamatória, auxiliando no tratamento das alopecias.",
      imageUrl: imgTreatment10,
    },
    {
      title: "Mesoterapia",
      description:
        "É uma técnica com aplicação de microinjeções de substâncias selecionadas no couro cabeludo para auxiliar no crescimento dos fios.",
      imageUrl: imgTreatment11,
    },
    {
      title: "Laser",
      description:
        "Tecnologia utilizada de diferentes formas para tratamento de rugas, manchas na pele, cicatrizes de acne, estrias, cicatrizes e alopecia.",
      imageUrl: imgTreatment12,
    },
    {
      title: "Toxina Botulínica",
      description:
        "Tramento de indicado para rugas dinâmicas, causada pelo movimento dos músculos da face, para prevenção de rugas fixas e mais profundas.",
      imageUrl: imgTreatment13,
    },
  ],
]

const TratamentosPage = () => (
  <Layout>
    <SEO title="Tratamentos" />
    <Head>Tratamentos</Head>
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

export default TratamentosPage
