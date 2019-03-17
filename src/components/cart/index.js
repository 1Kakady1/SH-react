import React from "react"

import Cart from "./cart"
import Payment from "./payment"
import Form from "./form"

export default (props) => (
    <div className="cart-wrap">
        <Cart/>
        <Payment/>
        <Form/>
    </div>
)