import React, { Component } from "react";
import Slider from "react-slick";
import Produtc from "./box-prodyct"
import { StaticQuery, graphql } from "gatsby"

class Carousel extends Component {
  constructor(props) {
    super(props)

    this.ProdList = this.ProdList.bind(this);
  }

  ProdList(list){
     let listProd = []
     for (let index = 0, i=1; index <  list.products.edges.length; index++,i++) {
        listProd[index] = <div className="slide-item" key={"wrap-key-"+(i.toString())}>
            <Produtc
                key={"prod-key-"+(i.toString())}
                img ={list.products.edges[index].node.frontmatter.image}
                cat={list.products.edges[index].node.frontmatter.cat}
                prodId={list.products.edges[index].node.frontmatter.id}
                url={list.products.edges[index].node.fields.slug}
                title={list.products.edges[index].node.frontmatter.title}
                price={list.products.edges[index].node.frontmatter.price}
            />
        </div>
     }

     return listProd
    
  }
  

    render() {
      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        //autoplay: true,
        //autoplaySpeed: 100
      };
      return (
          <Slider key="slider-slick" {...settings}>
            {this.ProdList(this.props.products)}
          </Slider>
      );
    }
  }

  export default (props) => (
    <StaticQuery  key="prodGrap"
    query={graphql`
      query ProdQuery {
        products:allMarkdownRemark(
          filter: {
            frontmatter: { page: { eq: "product" }, recomendet: {eq:true} }
          }
          ){
                edges {
                  node {
                    fields {
                      slug
                    }    
                   frontmatter{
                    id
                    title
                    cat
                    page
                    cat
                    price
                    image
                    dimensions
                  }
                  }
                }
          }
      }
    `}
    render={products => (
      <Carousel key="topSlider" products={products} {...props}  />
    )}
  />
)