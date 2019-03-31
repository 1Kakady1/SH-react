import React from "react"

import Cart from "./cart"
import Payment from "./payment"
import Form from "./form"

export default (props) => (
    <div className="cart-wrap">
        <Cart/>
        <div className="lom">
            <svg width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M31.7473 1.07274L31.6658 0.994124L16.4369 16.7973L1.29219 1.01289L0.00828803 2.25719L16.0605 18.9874L16.4207 18.6383L16.8021 19.0064L31.7312 3.51416L46.5774 18.9874L46.9375 18.6384L47.3188 19.0064L62.248 3.51416L77.0941 18.9874L77.4543 18.6383L77.8357 19.0064L93.9917 2.241L92.6995 0.994124L77.4705 16.7973L62.3259 1.01289L62.2641 1.07278L62.1826 0.994124L46.9538 16.7973L31.8091 1.01289L31.7473 1.07274Z" fill="#F68236"/>
            </svg>
        </div>
        <Form/>
    </div>
)