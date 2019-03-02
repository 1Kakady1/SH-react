import React from "react"
import { withPrefix } from 'gatsby'

const urlImg = withPrefix('/img/')

export default (props) => (
    <a href="#" className="card-product card-product__link">
        <div className="card-product__preview">
            <img src={(urlImg)+"/"+(props.nameImg)} alt={props.nameImg} className="card-product__preview-size"/>
        </div>
        <div className="cart-product__name">{props.name}</div>
        <div className="cart-product__price">{props.price}</div>
    </a>
)