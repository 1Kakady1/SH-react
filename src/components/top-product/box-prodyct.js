import React, { Component } from "react";
import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types';

export default class CenterMode extends Component {
    //constructor(props) {
    //    super(props)
   // }

    render() {
    const urlImg = withPrefix('/img/')
      return (
        <div className="box-product">
            <div className="preview">
                <img src={(urlImg)+"/"+ this.props.img} alt="" className="preview__img"/>
            </div>
            <a href={this.props.url} className="box-product__link cat-link">
                <span className="cat-link__cat">{this.props.cat}</span>
                <h2 className="cat-link__name">{this.props.title}</h2>
            </a>
        </div>
      );
    }
  }

  CenterMode.propTypes = {
    title: PropTypes.string,
    cat: PropTypes.string,
    img: PropTypes.string,
    prodId: PropTypes.number,
    price: PropTypes.string
  };