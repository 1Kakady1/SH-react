import React from "react";
import Helmet from "react-helmet";
import SliderV from "react-slick";
import { Link } from "gatsby"
import { graphql } from "gatsby";
import { withPrefix } from 'gatsby'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import SliderVerItem from "../components/sliderV-item/index"
import Nav from "../components/nav/nav"
import ToggleMenu from "../components/nav/nav-toggle"
import NavBtn from "../components/nav/nav-btn"
import Header from "../components/header"
import Footer from "../components/footer/index"
import Container from "../components/container"
import TopSlider from "../components/top-product/index"
import BarUrl from "../components/nav/nav-url"
import Title from "../components/title/index"



export default class PostTemplate extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          size: null,
          modalShow: false
        };

        this.returnContent= this.returnContent.bind(this);
        this.handleClickOutside= this.handleClickOutside.bind(this);
        this.addCartNotNull= this.addCartNotNull.bind(this);
    }

    returnContent(){
      return this.props.data.markdownRemark.html
    }

componentWillUnmount() {
  document.removeEventListener('click', this.handleClickOutside, false);
}

componentWillMount() {
  document.addEventListener('click', this.handleClickOutside, false);
}

addCartNotNull(){
    if(this.state.size === null ){
      this.setState(state => ({
        modalShow: true,
       }));
    } else {
      this.setState(state => ({
        modalShow: false,
       }));
    } 
}

handleClickOutside(e) {

  let target = e.target,
      sizeItem = document.getElementsByClassName('size__item');

  if (target.className==='size__item') {

    for(let i = 0; i<sizeItem.length;i++){
      sizeItem[i].classList.remove("size__item_active")
    }

    target.classList.add("size__item_active");

    this.setState(state => ({
      size: target.innerText,
    }));
  }
}

  render() {
    const urlImg = withPrefix('/img/')
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const ModalInfo =()=> (<div className="add-info">Укажите размер</div>);
    
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
    const listSize =post.sizeProduct.map((size) =>
    <li className="size__item" key={size.toString()}>{size.toString()}</li>);
    return (

      <Container modifPad="prod-post_padding">
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
              <ReactCSSTransitionGroup
                  className="animated-list"
                  transitionName={ {
                      enter: 'slideInRight',
                      leave: 'slideOutRight',
                      appear: 'appear'
                  } }
                  transitionAppearTimeout={0}
                  transitionEnterTimeout={0}
                  transitionLeaveTimeout={0}
              >
                  {
                    this.state.modalShow ? <ModalInfo/> : null
                  }
              </ReactCSSTransitionGroup>
              <SliderV key="sliderV-slick" {...settings}>
                {listSlide}
              </SliderV>
              <Title title={post.title} subTitle={"Article number: "+(post.code)} modifClass="product-content_size">
                <p className="content-title__price">€ {post.price}</p>
              </Title>
              <div className="product-content__html-content" dangerouslySetInnerHTML={{ __html: postNode.html }} />
           </div>

           <div className="product-cart-send">
              <h2 className="title-size"> Размер </h2>
              <ul className="size">
                  {listSize}
              </ul>
              <button className="btn-bg btn-bg_size-1" onClick={this.addCartNotNull}> Добавить </button>
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