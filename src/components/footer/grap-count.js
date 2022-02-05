import React from "react"
import { StaticQuery, graphql } from "gatsby"

function CountCatProd(props) {
    return <h1>{props.data.men.edges.length}</h1>
}

export default (props) => (
    <StaticQuery  key="prodGrap"
    query={graphql`
      query CountListQuery {
        woman:allMarkdownRemark(
            filter: {
              frontmatter: { page: { eq: "product" }, cat: {eq:"woman"} }
            }
            ){
                  edges {
                    node{
                      id
                    }
                  }
            }
men:allMarkdownRemark(
            filter: {
              frontmatter: { page: { eq: "product" }, cat: {eq:"men"} }
            }
            ){
                  edges {
                    node{
                      id
                    }
                  }
            }
kids:allMarkdownRemark(
            filter: {
              frontmatter: { page: { eq: "product" }, cat: {eq:"kids"} }
            }
            ){
                  edges {
                    node{
                      id
                    }
                  }
            }
comming:allMarkdownRemark(
            filter: {
              frontmatter: { page: { eq: "product" }, cat: {eq:"comming"} }
            }
            ){
                  edges {
                    node{
                      id
                    }
                  }
            }
soon:allMarkdownRemark(
            filter: {
              frontmatter: { page: { eq: "product" }, cat: {eq:"soon"} }
            }
            ){
                  edges {
                    node{
                      id
                    }
                  }
            }    
      }
    `}
    render={data => (
      <CountCatProd  countList={data}  {...props}  />
    )}
  />
)