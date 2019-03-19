import {CLEAR_CART,DELETE_PRODUCT_CART,ADD_IN_CART,SESSION_LOAD,CART_COUNTER_ADD,
    CART_COUNTER_SUB} from "./actionsType"

export function clearCart(){
    return{
        type: CLEAR_CART
    }
}

export function addCart(product){
    return{
        type: ADD_IN_CART,
        payload: product
    }
}

export function delCart(product){
    return{
        type: DELETE_PRODUCT_CART,
        payload: product
    }
}

export function sessionLoad(sessionCart){
    return{
        type: SESSION_LOAD,
        payload: sessionCart
    }
}

export function cartCounterAdd(countIndex){
    return{
        type: CART_COUNTER_ADD,
        payload: countIndex
    }
}

export function cartCounterSub(countIndex){
    return{
        type: CART_COUNTER_SUB,
        payload: countIndex
    }
}