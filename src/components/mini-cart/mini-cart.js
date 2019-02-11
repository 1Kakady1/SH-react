import React,{ Component } from "react"
import { withPrefix } from 'gatsby'
import { Link } from "gatsby"

class MiniCart extends Component {
    constructor(props) {
        super(props)

        //this.ListItems = this.ListItems.bind(this);
    }

    render() {
    const urlImg = withPrefix('/img/')
      return (
        <div className="mini-cart">
            <div className="mini-cart-list">
                <div className="mini-cart-list__product cart-product">
                    <div className="cart-product-preview">
                        <img src={(urlImg)+"/404.jpg"} className="cart-product-preview__img" alt="prod"/>
                    </div>
                    <div className="cart-product-info">
                        <h4 className="cart-product-info__name">dwdadawd</h4>
                        <span className="cart-product-info__cat">wdawwddawd</span>
                    </div>
                    <div className="price-wrap">
                            <div className="price">12$</div>
                    </div>
                    <button className="cart-product__del">X</button>
                </div>
            </div>

            <div className="mini-cart-info">
                <span className="mini-cart-info__total--price"> 199$</span>
                <button className="mini-cart-info__clear--cart">Очистить</button>
            </div>
            
            <div className="in-cart">
                 <Link to="/cart"  state={{pleasant: "reasonably",}}>
                    В Корзину
                 </Link>
            </div>

        </div>
      )
    }
  }

  export default MiniCart