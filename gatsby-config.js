const path = require(`path`)

module.exports = {
    siteMetadata: {
      title: `SH`,
      logo:"./src/assets/img/logo.png",
      social:["vk","fb","tw"],
      socialUrl:["https://vk.com","https://vk.com","https://vk.com"],
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          //name: `src`,
          //path: `${__dirname}/src/`,
          name: "posts",
          path: `${__dirname}/content/`
        },
      },
      `gatsby-plugin-sass`,
      `gatsby-transformer-remark`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-sharp`, 
      `gatsby-transformer-sharp`,
      `gatsby-plugin-emotion`,
      `gatsby-plugin-favicon`,
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
      {
        resolve: `gatsby-plugin-favicon`,
        options: {
          logo: "./src/favicon.png",
    
          // WebApp Manifest Configuration
          appName: null, // Inferred with your package.json
          appDescription: null,
          developerName: null,
          developerURL: null,
          dir: 'auto',
          lang: 'en-US',
          background: '#fff',
          theme_color: '#fff',
          display: 'standalone',
          orientation: 'any',
          start_url: '/?homescreen=1',
          version: '1.0',
    
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: false
          }
        }
      }
    ],
  }