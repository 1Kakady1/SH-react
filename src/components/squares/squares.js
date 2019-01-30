import React from "react"
import Column from "./column"
import Section from "./section-1"
import { StaticQuery, graphql } from "gatsby"

export default () => (
    <StaticQuery
    query={graphql`
      query SquaresQuery {
        allMarkdownRemark(
            filter: {
              frontmatter: { page: { eq: "home" } }
            }
                ){
                  edges {
                    node {
                      fields {
                        slug
                      }
                                
                     frontmatter{
                      title
                      date
                      page
                    }
                    excerpt
                    }
                  }
                }
      }
    `}
    render={data => (
        <div className="squares">
        <div className="row">
            <Column>
                <Section 
                    title={data.allMarkdownRemark.edges[0].node.frontmatter.date}
                    bg="404.jpg"
                    info="BRAIDED LEATHER" 
                    url="#" 
                    price="" 
                    usname="" 
                    class="link_h295 left-hover" 
                    hoverIcon="errow"
                />
            </Column>
            <Column>
                <Section 
                    title="elegant shoes" 
                    bg="404.jpg"
                    info="BRAIDED LEATHER" 
                    url="#" 
                    price="" 
                    usname="" 
                    class="link_h295 top-hover" 
                    hoverIcon="errow"
                />
            </Column>
            <Column>
                <Section 
                    title="elegant shoes" 
                    bg="404.jpg"
                    info="BRAIDED LEATHER" 
                    url="#" 
                    price="" 
                    usname="" 
                    class="link_h295 right-hover" 
                    hoverIcon="errow"
                />
            </Column>
        </div>
    </div>
    )}
  />
)