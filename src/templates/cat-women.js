import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet";

import ProductListOfCat from "../components/cat/cat-prod-list"
import Nav from "../components/nav/nav"
import ToggleMenu from "../components/nav/nav-toggle"
import NavBtn from "../components/nav/nav-btn"
import Header from "../components/header"
import Footer from "../components/footer/index"
import Container from "../components/container"
import TopSlider from "../components/top-product/index"
import BarUrl from "../components/nav/nav-url"


export default class TemplateCat extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    console.log(currentPage); console.log(numPages);
    return (
        <Container modifPad="prod-post_padding">
          <Helmet
              title={"SH - Категория Women "}
              meta={[
                  { name: "description", content: "Sample" },
                  { name: "keywords", content: "sample, something" },
                  { name: "viewport", content: "width=device-width, initial-scale=1"}
              ]}>
              <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          </Helmet>
          <Header>
              <ToggleMenu>
                  <Nav/>
                  <NavBtn/>
              </ToggleMenu>
          </Header>
              <BarUrl>
                  <div className="url-now">
                    <span className="url-now__name">
                        women
                    </span>
                  </div>
              </BarUrl>
              <ProductListOfCat data = {posts}/>
              <TopSlider/>
          <Footer/>
      </Container>   
    )
  }
}

export const manListQuery = graphql`
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
            price
            image
            code
          }
        }
      }
    }
  }
`