import React, { Component } from "react";
import Slider from "react-slick";
//import Produtc from "./box-prodyct"
import { StaticQuery, graphql } from "gatsby"

class Carousel extends Component {
  constructor(props) {
    super(props)

    //this.ProdList= this.ProdList.bind(this);
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
          <Slider {...settings}>
            <div>
              <h3>1{console.log(this.props.products)}</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
      );
    }
  }

  export default (props) => (
    <StaticQuery
    query={graphql`
      query ProdQuery {
        allMarkdownRemark(
            filter: {
              frontmatter: { page: { eq: "home" } }
            }
         	 sort: {fields: [frontmatter___position], order: ASC}
                ){
                  edges {
                    node {
                      fields {
                        slug
                      }
                                
                     frontmatter{
                      title
                      subTitle
                      usname
                      usinfo
                      price
                      image
                      date
                      page
                      position
                      hoverGr
                      hoverAnimation
                      classHeight
                    }
                    excerpt
                    }
                  }
            }
      }
    `}
    render={data => (
      <Carousel products={data} {...props} />
    )}
  />
)