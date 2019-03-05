import React,{ Component } from "react"
import { withPrefix } from 'gatsby'
import { Link } from "gatsby"
import {connect} from "react-redux"

class MiniCart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
    console.log(this.props)  
    const urlImg = withPrefix('/img/')

    const cartList = Array.from(this.props.ProductList).map((cartItem,index) =>  
        <div className="mini-cart-list__product cart-product" key={"cart-product-"+(cartItem.name.toString())+"-"+(Math.random())}>
            <div className="cart-product-preview">
                <img src={(urlImg)+"/"+(cartItem.image)} className="cart-product-preview__img" alt={cartItem.name.toString()}/>
            </div>
            <div className="cart-product-info">
                <h4 className="cart-product-info__name">{cartItem.name}</h4>
                <span className="cart-product-info__cat">{cartItem.cat}</span>
            </div>
            <div className="price-wrap">
                    <div className="price">{cartItem.price}</div>
            </div>
            <button className="cart-product__del" onClick={this.props.onDelItem.bind(this,index)}>X</button>
        </div>
    );
    
      return (
        <div className="mini-cart" key="mini-cart">
        
            <div className="mini-cart-list">
                {this.props.ProductList.lenght === 0 || this.props.summa === 0 ? <div className="cart-null">Корзина пуста</div> : cartList}
            </div>

            <div className="mini-cart-info">
                <span className="mini-cart-info__total--price">{this.props.summa}</span>
                <div className="mini-cart-info__wrap ">
                    <Link to="/cart" className="mini-cart-info__clear--cart" state={{pleasant: "reasonably",}}>
                        Корзина
                    </Link>
                    <button className="mini-cart-info__clear--cart" onClick={this.props.onClear}>Очистить</button>
                </div>
                
            </div>

        </div>
      )
    }
  }

  function mapStateToProps(state){
    return {
        ProductList: state.cart.ProductList,
        summa: state.cart.Summa,
        countPropd: state.counter.countProd
    }
}

function mapDispatchToProps(dispatch) {
    return{
        onDelItem: itemID => dispatch({type:'DELETE_PRODUCT_CART',payload: itemID}),
        onClear: () => dispatch({type:'CLEAR_CART'})
    }
}

  export default connect(mapStateToProps,mapDispatchToProps)(MiniCart)