import React from "react";
import SliderV from "react-slick";
import { withPrefix } from 'gatsby'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from "react-redux"

import SliderVerItem from "../sliderV-item/index"
import Title from "../title/index"



class PostTemplateContent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          size: null,
          modalShow: false
        };

        this.handleClickOutside= this.handleClickOutside.bind(this);
        this.addCartNotNull= this.addCartNotNull.bind(this);
    }

componentWillUnmount() {
  document.removeEventListener('click', this.handleClickOutside, false);
}

componentWillMount() {
  document.addEventListener('click', this.handleClickOutside, false);
}

addCartNotNull(post){
    if(this.state.size === null ){
      this.setState(state => ({
        modalShow: true,
       }));
    } else {
      this.setState(state => ({
        modalShow: false,
       }));

    //    let  arrContent = [{
    //         name: post.title,
    //         cat: post.cat,
    //         image: post.img,
    //         price: post.price,
    //         code: post.code,
    //         count: 1,
    //         size: [this.state.size]
    //     }]
    //    this.props.addCart.bind(this, arrContent)
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
    console.log(this.props.ProductList)
    const urlImg = withPrefix('/img/')
    const ModalInfo =()=> (<div className="add-info">Укажите размер</div>);
    const post = this.props.dataContent;
    const postNode=this.props.dataContentNode

    let  arrContent = [{
        name: post.title,
        cat: post.cat,
        image: post.img,
        price: parseInt(post.price),
        code: post.code,
        count: 1,
        size: [this.state.size]
    }]

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
        <React.Fragment>
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
              <button className="btn-bg btn-bg_size-1" onClick={this.props.addCart.bind(this, arrContent[0])}> Добавить </button>
           </div>
        </React.Fragment>      
    );
  }
}

function mapStateToProps(state){
  return {
      ProductList: state.ProductList,
      summa: state.Summa
  }
}

function mapDispatchToProps(dispatch) {
  return{
      addCart: arrContent => dispatch({type:'ADD_IN_CART',payload: arrContent}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (PostTemplateContent)
