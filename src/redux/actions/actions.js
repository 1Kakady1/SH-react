import {CLEAR_CART,DELETE_PRODUCT_CART,ADD_IN_CART} from "./actionsType"

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