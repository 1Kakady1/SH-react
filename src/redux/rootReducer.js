import {combineReducers} from 'redux'

import counter from './redusers/counter'
import cart from "./redusers/cart"



export default combineReducers({
    counter,
    cart,
})