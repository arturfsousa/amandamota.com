import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Head from "../components/Head"

import Gallery from "../components/Gallery"
import GalleryGroup from "../components/GalleryGroup"
import GalleryItem from "../components/GalleryItem"

import treatment1 from "../images/treatment-1.png"
import treatment2 from "../images/treatment-2.png"
import treatment3 from "../images/treatment-3.png"

const galleryItems = [
  [
    {
      title: "Skin Booster",
      description:
        "Hidratação profunda para maior suavidade, elasticidade, firmeza e melhora da aparência da pele.",
      imageUrl: treatment1,
    },
    {
      title: "Luz Intensa Pulsada",
      description:
        "Reduz manchas solares, sardas, trata rugas, poros dilatados e mudanças na textura da pele.",
      imageUrl: treatment2,
    },
    {
      title: "Preenchimento",
      description:
        "Para repor volume facial, dos lábios, contorno facial e amenizar bigode chinês, olheiras e rugas.",
      imageUrl: treatment3,
    },
    {
      title: "Skin Booster",
      description:
        "Hidratação profunda para maior suavidade, elasticidade, firmeza e melhora da aparência da pele.",
      imageUrl: treatment1,
    },
    {
      title: "Luz Intensa Pulsada",
      description:
        "Reduz manchas solares, sardas, trata rugas, poros dilatados e mudanças na textura da pele.",
      imageUrl: treatment2,
    },
    {
      title: "Preenchimento",
      description:
        "Para repor volume facial, dos lábios, contorno facial e amenizar bigode chinês, olheiras e rugas.",
      imageUrl: treatment3,
    },
  ],
  [
    {
      title: "Skin Booster",
      description:
        "Hidratação profunda para maior suavidade, elasticidade, firmeza e melhora da aparência da pele.",
      imageUrl: treatment1,
    },
    {
      title: "Luz Intensa Pulsada",
      description:
        "Reduz manchas solares, sardas, trata rugas, poros dilatados e mudanças na textura da pele.",
      imageUrl: treatment2,
    },
    {
      title: "Preenchimento",
      description:
        "Para repor volume facial, dos lábios, contorno facial e amenizar bigode chinês, olheiras e rugas.",
      imageUrl: treatment3,
    },
    {
      title: "Skin Booster",
      description:
        "Hidratação profunda para maior suavidade, elasticidade, firmeza e melhora da aparência da pele.",
      imageUrl: treatment1,
    },
    {
      title: "Luz Intensa Pulsada",
      description:
        "Reduz manchas solares, sardas, trata rugas, poros dilatados e mudanças na textura da pele.",
      imageUrl: treatment2,
    },
    {
      title: "Preenchimento",
      description:
        "Para repor volume facial, dos lábios, contorno facial e amenizar bigode chinês, olheiras e rugas.",
      imageUrl: treatment3,
    },
  ],
  [
    {
      title: "Skin Booster",
      description:
        "Hidratação profunda para maior suavidade, elasticidade, firmeza e melhora da aparência da pele.",
      imageUrl: treatment1,
    },
    {
      title: "Luz Intensa Pulsada",
      description:
        "Reduz manchas solares, sardas, trata rugas, poros dilatados e mudanças na textura da pele.",
      imageUrl: treatment2,
    },
    {
      title: "Preenchimento",
      description:
        "Para repor volume facial, dos lábios, contorno facial e amenizar bigode chinês, olheiras e rugas.",
      imageUrl: treatment3,
    },
    {
      title: "Skin Booster",
      description:
        "Hidratação profunda para maior suavidade, elasticidade, firmeza e melhora da aparência da pele.",
      imageUrl: treatment1,
    },
    {
      title: "Luz Intensa Pulsada",
      description:
        "Reduz manchas solares, sardas, trata rugas, poros dilatados e mudanças na textura da pele.",
      imageUrl: treatment2,
    },
    {
      title: "Preenchimento",
      description:
        "Para repor volume facial, dos lábios, contorno facial e amenizar bigode chinês, olheiras e rugas.",
      imageUrl: treatment3,
    },
  ],
  [
    {
      title: "Skin Booster",
      description:
        "Hidratação profunda para maior suavidade, elasticidade, firmeza e melhora da aparência da pele.",
      imageUrl: treatment1,
    },
    {
      title: "Luz Intensa Pulsada",
      description:
        "Reduz manchas solares, sardas, trata rugas, poros dilatados e mudanças na textura da pele.",
      imageUrl: treatment2,
    },
    {
      title: "Preenchimento",
      description:
        "Para repor volume facial, dos lábios, contorno facial e amenizar bigode chinês, olheiras e rugas.",
      imageUrl: treatment3,
    },
    {
      title: "Skin Booster",
      description:
        "Hidratação profunda para maior suavidade, elasticidade, firmeza e melhora da aparência da pele.",
      imageUrl: treatment1,
    },
    {
      title: "Luz Intensa Pulsada",
      description:
        "Reduz manchas solares, sardas, trata rugas, poros dilatados e mudanças na textura da pele.",
      imageUrl: treatment2,
    },
    {
      title: "Preenchimento",
      description:
        "Para repor volume facial, dos lábios, contorno facial e amenizar bigode chinês, olheiras e rugas.",
      imageUrl: treatment3,
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
