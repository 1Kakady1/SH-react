import React, { Component } from "react";
import Slider from "react-slick";
import Produtc from "./box-prodyct"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'


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

      const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
          {...props}
          className={
            "slick-prev slick-arrow" +
            (currentSlide === 0 ? " slick-disabled" : "")
          }
          aria-label="Previous"
          aria-disabled={currentSlide === 0 ? true : false}
          type="button"
        >
          <FontAwesomeIcon icon={faCaretLeft}  className="slick-arrow__icon"/>
        </button>
      );
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
          {...props}
          className={
            "slick-next slick-arrow" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
          }
          aria-label="Next"
          aria-disabled={currentSlide === slideCount - 1 ? true : false}
          type="button"
        >
          <FontAwesomeIcon icon={faCaretRight}  className="slick-arrow__icon"/>
        </button>
      );
    
      const settings = {
        className: "center top-product",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 800,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 996,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          },          
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 1,
              centerPadding: "1px",
            }
          }
          
        ]
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