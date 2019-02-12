import React,{ Component } from "react"
import { withPrefix } from 'gatsby'
import { Link } from "gatsby"

class MiniCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ProductList: [{
                            name: "",
                            cat: "",
                            image: "",
                            price: 0,
                            id: "",
                            key: ""
                          }

                        ],
        };
        this.miniCartClear = this.miniCartClear.bind(this);
    }

    miniCartClear(){

        let prodListChild= document.getElementsByClassName("mini-cart-list")[0].childNodes,
            prodList= document.getElementsByClassName("mini-cart-list")[0],
            div = document.createElement('div');

            div.className = "mini-cart-list__null ";
            div.innerHTML = "<span class='mini-cart-list__null--text'>Корзина пуста</span>"

        for (let index = 0; index < prodListChild.length; index++) {
            prodListChild[index].remove()
        }

        prodList.appendChild(div);


    }


    render() {
    const urlImg = withPrefix('/img/')
      return (
        <div className="mini-cart" key="mini-cart">
            <div className="mini-cart-list">
                <div className="mini-cart-list__product cart-product" key={"cart-product-"+1}>
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
                <div className="mini-cart-info__wrap ">
                    <Link to="/cart" className="mini-cart-info__clear--cart" state={{pleasant: "reasonably",}}>
                        Корзина
                    </Link>
                    <button className="mini-cart-info__clear--cart" onClick={() => this.miniCartClear()}>Очистить</button>
                </div>
                
            </div>

        </div>
      )
    }
  }

  export default MiniCart