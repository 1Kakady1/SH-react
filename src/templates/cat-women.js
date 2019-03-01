import React from "react"
import { graphql } from "gatsby"

export default class TemplateCat extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return <div key={node.fields.slug}>{title}</div>
        })}
      </div>
    )
  }
}

export const womenListQuery = graphql`
  query womenListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        filter: {
            frontmatter: { cat: { eq: "women" } }
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