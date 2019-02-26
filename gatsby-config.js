module.exports = {
  siteMetadata: {
    title: `Amanda Mota Dermatologista`,
    description: `Dermatologista formada pela UERJ, com título de especialista pela SBD, atua no consultorio privado e como professora na residencia em dermatologia do HCA.`,
    author: `@arturfsousa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Amanda Mota`,
        start_url: `/`,
        background_color: `#80a1d4`,
        theme_color: `#80a1d4`,
        display: `minimal-ui`,
        icon: `src/images/website-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
