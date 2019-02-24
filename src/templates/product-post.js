import React from "react";
import Helmet from "react-helmet";
import SliderV from "react-slick";
import { graphql } from "gatsby";
import { withPrefix } from 'gatsby'
import SliderVerItem from "../components/sliderV-item/index"
import Nav from "../components/nav/nav"
import ToggleMenu from "../components/nav/nav-toggle"
import NavBtn from "../components/nav/nav-btn"
import Header from "../components/header"
import Footer from "../components/footer/index"
import Container from "../components/container"
import TopSlider from "../components/top-product/index"
import BarUrl from "../components/nav/nav-url"
import { Link } from "gatsby"


export default class PostTemplate extends React.Component {
    constructor(props) {
        super(props)
    }
  render() {
    const urlImg = withPrefix('/img/')
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    
    const post = postNode.frontmatter;

    if (!post.id) {
      post.id = slug;
    }

    const settings = {
      customPaging: function(i) {
        return (
          <div className="dot-custom">
            <img className="dot-custom__bg" src={`${urlImg}/${post.gallary[i]}`} alt={i} />
          </div>
        );
      },
      dots: true,
      infinite: true,
      className: "slider-vert",
      prevArrow: false,
      nextArrow: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
    };

    const listSlide =post.gallary.map((galItem) =>
    <SliderVerItem key={galItem.toString()} imageGal={galItem} itemKey={galItem.toString()}/>);

    return (

      <Container>
        <Helmet
            title={"SH - "+(post.title)}
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
                <Link to={"/"+(post.cat)} className="bar-link"  state={{pleasant: "reasonably",}}>
                    <span className="bar-link__name">{post.cat}</span>
                </Link>
                <div className="sl">/</div>
                <div className="url-now">
                  <span className="url-now__name">
                      {post.title}
                  </span>
                </div>
            </BarUrl>

            <div className="product-content">
              <SliderV key="sliderV-slick" {...settings}>
                {listSlide}
              </SliderV>
           </div>
           
            <TopSlider/>
        <Footer/>
  </Container>     
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        id
        price
        dimensions
        cat
        recomendet
        image
        gallary
        sizeProduct
        code
      }
      fields {
        slug
      }
    }
  }
`;