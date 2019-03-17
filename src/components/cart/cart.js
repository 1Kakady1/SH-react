import React from "react"
import { withPrefix } from 'gatsby'
import {connect} from "react-redux"
import {delCart,clearCart} from "../../redux/actions/actions"

class Cart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
 
    const urlImg = withPrefix('/img/')

    // const cartList = Array.from(this.props.ProductList).map((cartItem,index) =>  
    //     <div className="cart-product cart-product__list" key={"cart-product-"+(cartItem.name.toString())+"-"+(Math.random())}>
            
    //     </div>
    // );
    
      return (
        <div className="cart-table">
            <div className="cart-table-title cart-table_position">
                <div className="cart-table-title__item cart-table_w126">Продукт</div>
                <div className="cart-table-title__item cart-table_w504">Описание</div>
                <div className="cart-table-title__item cart-table_w158">Цвет</div>
                <div className="cart-table-title__item cart-table_w104">Размер</div>
                <div className="cart-table-title__item cart-table_w104">Кол.</div>
                <div className="cart-table-title__item cart-table_w126">Цена</div>
                <div className="cart-table-title__item cart-table_w104">Убрать</div>
            </div>

            <div className="product-cart-wrap">

                <div className="cart-table-list  cart-table_position">
                    <div className="cart-table-list__item cart-table_w126">
                        <img src={(urlImg)+"404.jpg"} className="cart-table-list__img" alt=""/>
                    </div>
                    <div className="cart-table-list__item cart-table_w504">
                        <h2 className="cart-list__title">Name nmae </h2>
                        <span className="cart-list__code"> 00000</span>
                    </div>
                    <div className="cart-table-list__item cart-table_w158">fefef</div>
                    <div className="cart-table-list__item cart-table_w104">fefe</div>
                    <div className="cart-table-list__item cart-table_w104">
                        <span className="cart-list__count">1</span>
                        <div className="counter">
                            <button className="counter__add">+</button>
                            <button className="counter__sub">-</button>
                        </div>
                    </div>
                    <div className="cart-table-list__item cart-table_w126"> 110 $ </div>
                    <div className="cart-table-list__item cart-table_w104"><button className="cart-table-list__del">x</button></div>
                </div>

                <div className="cart-table-list  cart-table_position">
                    <div className="cart-table-list__item cart-table_w126">
                        <img src={(urlImg)+"404.jpg"} className="cart-table-list__img" alt=""/>
                    </div>
                    <div className="cart-table-list__item cart-table_w504">
                        <h2 className="cart-list__title">Name nmae </h2>
                        <span className="cart-list__code"> 00000</span>
                    </div>
                    <div className="cart-table-list__item cart-table_w158">fefef</div>
                    <div className="cart-table-list__item cart-table_w104">fefe</div>
                    <div className="cart-table-list__item cart-table_w104">
                        <span className="cart-list__count">1</span>
                        <div className="counter">
                            <button className="counter__add">+</button>
                            <button className="counter__sub">-</button>
                        </div>
                    </div>
                    <div className="cart-table-list__item cart-table_w126"> 110 $ </div>
                    <div className="cart-table-list__item cart-table_w104"><button className="cart-table-list__del">x</button></div>
                </div>

            </div>

        </div>
      )
    }
  }

  function mapStateToProps(state){
    return {
        ProductList: state.cart.ProductList,
        Summa: state.cart.Summa,
        countPropd: state.counter.countProd
    }
}

function mapDispatchToProps(dispatch) {
    return{
        onDelItem: itemID => dispatch(delCart(itemID)),
        onClear: () => dispatch(clearCart()),
    }
}

  export default connect(mapStateToProps,mapDispatchToProps)(Cart)