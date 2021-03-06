const config = require("./src/config")

module.exports = {
  siteMetadata: {
    title: config.meta.title,
    description: config.meta.description,
    author: config.meta.author,
    siteName: config.meta.siteName,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Amanda Dermato`,
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
