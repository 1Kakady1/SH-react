import React from "react"
import { withPrefix } from 'gatsby'
import {connect} from "react-redux"
import {delCart,clearCart,cartCounterAdd,cartCounterSub} from "../../redux/actions/actions"

class Cart extends React.Component {
    constructor(props) {
        super(props)
    }

    printSize(arrSize){
        let str = ""
        arrSize.forEach(sizeItem => {
            str +=sizeItem + ","
        });

        return str.substring(0, str.length - 1)
    }

    consoleLog(a,msg){
        console.log(msg,a)
    }

    render() {
 
    const urlImg = withPrefix('/img/')

     const cartList = Array.from(this.props.ProductList).map((cartItem,index) =>  
                    <div className="cart-table-list  cart-table_position" key={"cart-table-list-"+(cartItem.name.toString())+"-"+(Math.random())}>
                        <div className="cart-table-list__item cart-table_w126">
                            <img src={(urlImg)+(cartItem.image)} className="cart-table-list__img" alt={cartItem.name}/>
                        </div>
                        <div className="cart-table-list__item cart-table_w504">
                            <h2 className="cart-list__title">{cartItem.name}</h2>
                            <span className="cart-list__code">{cartItem.code}</span>
                        </div>
                        <div className="cart-table-list__item cart-table_w183">
                            {
                                //this.consoleLog(cartItem.size,"size")
                                cartItem.size.length === 1 ? cartItem.size : this.printSize(cartItem.size)
                            }
                        </div>
                        <div className="cart-table-list__item cart-table_w183">
                            <span className="cart-list__count">{cartItem.count}</span>
                            {
                                cartItem.size.length === 1 ?
                                    <div className="counter">
                                        <button className="counter__sub" onClick={this.props.onCartCounterSub.bind(this,index)}>-</button>
                                        <button className="counter__add" onClick={this.props.onCartCounterAdd.bind(this,index)}>+</button>
                                    </div>
                                        :
                                    null
                            }

                        </div>
                        <div className="cart-table-list__item cart-table_w126 cart-table_row"> {cartItem.price} <span>€</span></div>
                        <div className="cart-table-list__item cart-table_w104">
                            <button className="cart-table-list__del" onClick={this.props.onDelItem.bind(this,index)}>X</button>
                        </div>
                    </div>
     );
    
      return (
        <React.Fragment>
            {this.props.ProductList.lenght === 0 || this.props.Summa === 0 ? 
                <div className="cart-null">Корзина пуста</div> 
                    : 
                    <div className="cart-table">
                        <div className="cart-table-title cart-table_position">
                            <div className="cart-table-title__item cart-table_w126">Продукт</div>
                            <div className="cart-table-title__item cart-table_w504">Описание</div>
                            <div className="cart-table-title__item cart-table_w183">Размер</div>
                            <div className="cart-table-title__item cart-table_w183">Кол.</div>
                            <div className="cart-table-title__item cart-table_w126 ">Цена</div>
                            <div className="cart-table-title__item cart-table_w104">Убрать</div>
                        </div>
            
                        <div className="product-cart-wrap">
                            {cartList}
                        </div>
        
                    </div>
            }
        </React.Fragment>
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
        onCartCounterAdd: itemID => dispatch(cartCounterAdd(itemID)),
        onCartCounterSub: itemID => dispatch(cartCounterSub(itemID)),
    }
}

  export default connect(mapStateToProps,mapDispatchToProps)(Cart)