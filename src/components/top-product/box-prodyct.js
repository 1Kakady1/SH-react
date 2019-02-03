import React, { Component } from "react";
import { withPrefix } from 'gatsby'

export default class CenterMode extends Component {
    constructor(props) {
        super(props)
    }

    render() {
    const urlImg = withPrefix('/img/')
      return (
        <div className="box-product">
            <div className="preview">
                <img src={(urlImg)+"/"+ this.props.img} alt="" className="preview__img"/>
            </div>
            <h2 className="box-product__title"></h2>
            <a href={this.props.url} className="box-product__link cat-link">
                <span className="cat-link__name">{this.props.cat}</span>
            </a>
            <button className="box-product__add-btn" data-prod-id={this.props.prodId}>Добавить</button>
        </div>
      );
    }
  }