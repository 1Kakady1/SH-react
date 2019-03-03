import React from "react"
import { withPrefix } from 'gatsby'
import { Link } from "gatsby"

const urlImg = withPrefix('/img/')

export default (props) => (
    <Link to={props.prodUrl} className="card-product card-product__link card-product_margin"  state={{pleasant: "reasonably",}}>
        <div className="card-product__preview">
            <img src={(urlImg)+"/"+(props.nameImg)} alt={props.nameImg} className="card-product__preview-size"/>
        </div>
        <div className="cart-product__name cart-product_weight-b">{props.name}</div>
        <div className="cart-product__price cart-product_weight-n">{props.price}</div>
   </Link>
)