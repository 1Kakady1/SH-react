import React, { Component } from "react"
import Search from '../search/search-form'
import MiniCart from "../mini-cart/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class NavBtn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showCart: false,
        };
    
        this.ShowCart = this.ShowCart.bind(this);

      }

        ShowCart(){
            this.setState(prevState => ({ showCart: !prevState.showCart }));
        }


    render() {
     
      return (
        <div className="nav-user">
            <div className="login">
                <FontAwesomeIcon icon={ faUser } className="icon__color-hover" />
                <span className="login__text">Log In</span>
            </div>
            <div className="cart">
                <FontAwesomeIcon icon={ faShoppingBag}  className="icon__color-hover"/>
                <span className="cart__text" onClick={() => this.ShowCart()}>Basket (<span className="cart_count">0</span>)</span>
            </div>
            <div className="search">
                <Search />
            </div>
            <ReactCSSTransitionGroup
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
                    this.state.showCart
                        ? <MiniCart />
                        : null
                }
            </ReactCSSTransitionGroup>

        </div>
      )
    }
  }
  
  export default NavBtn