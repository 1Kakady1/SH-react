import React, { Component } from "react"
import Search from '../search/search-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

class NavBtn extends Component {
    render() {
     
      return (
        <div className="nav-user">
            <div className="login">
                <FontAwesomeIcon icon={ faUser } className="icon__color-hover" />
                <span className="login__text">Log In</span>
            </div>
            <div className="cart">
                <FontAwesomeIcon icon={ faShoppingBag}  className="icon__color-hover"/>
                <span className="cart__text">Basket (<span className="cart_count">0</span>)</span>
            </div>
            <div className="search">
                <Search />
            </div>
        </div>
      )
    }
  }
  
  export default NavBtn