import React from "react"
import { graphql , Link } from "gatsby"
import ReactWOW from 'react-wow'
import Helmet from "react-helmet";

import Nav from "../components/nav/nav"
import ToggleMenu from "../components/nav/nav-toggle"
import NavBtn from "../components/nav/nav-btn"
import Header from "../components/header"
import Title from "../components/title/index"
import Footer from "../components/footer/index"
import Container from "../components/container"
import TopSlider from "../components/top-product/index"
import BarUrl from "../components/nav/nav-url"
import CartProd from "../components/cat/cat-prod-item"


export default class TemplateCat extends React.Component {
  render() {
   const postsMan = this.props.data.catMan.edges,
         postsWomen = this.props.data.catWomen.edges

    const manList = postsMan.map((prodItem) =>
        <CartProd 
                key={prodItem.node.frontmatter.code.toString()} 
                name={prodItem.node.frontmatter.title.toString()} 
                nameImg={prodItem.node.frontmatter.image} 
                price={prodItem.node.frontmatter.price}
                prodUrl={prodItem.node.fields.slug}
        />
    );

    const womenList = postsWomen.map((prodItem) =>
    <CartProd 
            key={prodItem.node.frontmatter.code.toString()} 
            name={prodItem.node.frontmatter.title.toString()} 
            nameImg={prodItem.node.frontmatter.image} 
            price={prodItem.node.frontmatter.price}
            prodUrl={prodItem.node.fields.slug}
    />
);



    return (
        <Container modifPad="prod-post_padding">
          <Helmet
              title={"SH - Все Категории "}
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
                        Все категории товаров
                    </span>
                  </div>
              </BarUrl>
              <ReactWOW animation='slideInUp'>
                <Title title={"Мужское"}>
                  <Link 
                      to="/cat/man" 
                      className="content-title__sub-title link__cat"  
                      state={{pleasant: "reasonably",}
                    }>
                    Смотрет все товары данной категории
                  </Link>
                </Title>
                <div className="product-cat">
                  {manList}
                </div>
              </ReactWOW>
              
              <ReactWOW animation='slideInUp'>
                <Title title={"Женское"}>
                  <Link 
                      to="/cat/women" 
                      className="content-title__sub-title link__cat"  
                      state={{pleasant: "reasonably",}
                    }>
                    Смотрет все товары данной категории
                  </Link>
                </Title>
                <div className="product-cat">
                  {womenList}
                </div>
              </ReactWOW>
              <TopSlider/>
          <Footer/>
      </Container>   
    )
  }
}

export const catAllListQuery = graphql`
  query catAllListQuery {
    catMan:allMarkdownRemark(
      filter: {
          frontmatter: { cat: { eq: "Мужское" } }
        }
    sort: { fields: [frontmatter___date], order: DESC }
    limit: 4
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

  catWomen:allMarkdownRemark(
      filter: {
          frontmatter: { cat: { eq: "Женское" } }
        }
    sort: { fields: [frontmatter___date], order: DESC }
    limit: 4
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