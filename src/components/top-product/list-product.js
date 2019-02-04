import React, { Component } from "react";
import Slider from "react-slick";
import Produtc from "./box-prodyct"

class Carousel extends Component {
  constructor(props) {
    super(props)

    this.ProdList = this.ProdList.bind(this);
  }

  ProdList(list){
     let listProd = []
      console.log(list.products.edges.length)

     for (let index = 0; index <  list.products.edges.length; index++) {
        listProd[index] = <div className="slide-item">
            <Produtc
                key={"prod-key-"+(index.toString())}
                img ={list.products.edges[index].node.frontmatter.image}
                cat={list.products.edges[index].node.frontmatter.cat}
                prodId={list.products.edges[index].node.frontmatter.id}
                url={list.products.edges[index].node.fields.slug}
                title={list.products.edges[index].node.frontmatter.title}
                
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
          <Slider {...settings}>
            {this.ProdList(this.props.products)}
          </Slider>
      );
    }
  }

  export default Carousel