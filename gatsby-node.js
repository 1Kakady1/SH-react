const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /bad-module/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }


  exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `pages` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
                page
                cat
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/post.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          slug: edge.node.fields.slug,
        },
      })
    })

    //  templates cat
    let bufMan=0
       ,bufWomen=0;

    const catList = ["man","women"]

    for(let m = 0;m < posts.length; m++){

      if(posts[m].node.frontmatter.cat === catList[0]){
        bufMan++;
      }
      if(posts[m].node.frontmatter.cat === catList[1]){
        bufWomen++;
      }
    }

    const postsPerPage = 12
    const numPagesArr = [Math.ceil(bufMan / postsPerPage),Math.ceil(bufWomen / postsPerPage)]
    //const numPages = Math.ceil(bufMan / postsPerPage)
   // const numPagesW = Math.ceil(bufWomen / postsPerPage)

    
    for (let index = 0; index < catList.length; index++) {

      Array.from({ length: numPagesArr[index] }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/cat/${String(catList[index])}` : `/cat/man/${i + 1}`,
          component: path.resolve(`./src/templates/cat-${String(catList[index])}.js`),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages: numPagesArr[index],
            currentPage: i + 1
          },
        })
      }) 

    }

    

  })
}
  
  exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    if (page.path.match(/^\/app/)) {
      page.matchPath = "/app/pages/product/*"
      createPage(page)
    }
  }