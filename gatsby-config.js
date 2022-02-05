module.exports = {
  siteMetadata: {
    title: `SH`,
    logo:"./src/assets/img/logo.png",
    social:["vk","fb","tw"],
    socialUrl:["https://vk.com","https://vk.com","https://vk.com"],
  },
  plugins: [        `gatsby-plugin-sass`,
  `gatsby-transformer-remark`,
  `gatsby-plugin-react-helmet`,
`gatsby-plugin-catch-links`,
  `gatsby-plugin-sharp`, 
  `gatsby-transformer-sharp`,
`gatsby-plugin-emotion`,
//`gatsby-plugin-favicon`, 
  // {
  //   resolve: 'gatsby-source-filesystem',
  //   options: {
  //     "name": "images",
  //     "path": "./src/images/"
  //   },
  //   __key: "images"
  // },
  {
    resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
    options: {
      // Fields to index
      fields: [`title`, `page`, `cat`],
      // How to resolve each field`s value for a supported node type
      resolvers: {
        // For any node of type MarkdownRemark, list how to resolve the fields` values
        MarkdownRemark: {
          title: node => node.frontmatter.title,
          page: node => node.frontmatter.page,
          cat: node => node.frontmatter.cat,
          path: node => node.frontmatter.path,
        },
      },
    },
  },
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
  // {
  //   resolve: `gatsby-plugin-favicon`,
  //   options: {
  //     logo: "./src/favicon.png",

  //     // WebApp Manifest Configuration
  //     appName: null, // Inferred with your package.json
  //     appDescription: null,
  //     developerName: null,
  //     developerURL: null,
  //     dir: 'auto',
  //     lang: 'en-US',
  //     background: '#fff',
  //     theme_color: '#fff',
  //     display: 'standalone',
  //     orientation: 'any',
  //     start_url: '/?homescreen=1',
  //     version: '1.0',

  //     icons: {
  //       android: true,
  //       appleIcon: true,
  //       appleStartup: true,
  //       coast: false,
  //       favicons: true,
  //       firefox: true,
  //       opengraph: false,
  //       twitter: false,
  //       yandex: false,
  //       windows: false
  //     }
  //   }
  // },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: "posts",
      path: `${__dirname}/content/`
    },
    __key: "pages"
  }]
};