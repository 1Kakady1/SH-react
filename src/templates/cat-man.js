import React from "react"
import { graphql } from "gatsby"
import Test from "../components/cat/cat-prod"

export default class TemplateCat extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return <div key={node.fields.slug}>{title}</div>
        })}
        <Test data = {posts}/>
      </div>
    )
  }
}

export const manListQuery = graphql`
  query manListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        filter: {
            frontmatter: { cat: { eq: "man" } }
          }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`