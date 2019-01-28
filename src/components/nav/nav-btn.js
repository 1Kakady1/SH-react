import React, { Component } from "react"
import GeneralBtn from "../gen-btn"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
//console.log(faSearch);
class NavBtn extends Component {
    render() {
     const arrayClass = ["btn","search__btn"];
     console.log(arrayClass);
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
                <GeneralBtn icon="search"  classBtn={arrayClass} title="" />
            </div>
        </div>
      )
    }
  }
  
  export default NavBtn