const path = require(`path`)

module.exports = {
    siteMetadata: {
      title: `Pandas Eating Lots`,
      logo:"./src/assets/img/logo.png",
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
      `gatsby-plugin-sass`,
      `gatsby-transformer-remark`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-sharp`, 
      `gatsby-transformer-sharp`,
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
      {
        resolve: `gatsby-plugin-create-client-paths`,
        options: { prefixes: [`/app/*`] },
      },
    ],
  }