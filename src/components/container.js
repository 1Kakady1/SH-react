import React from "react"
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import rootReducer from "../redux/rootReducer";
import throttle from 'lodash.throttle';
import SessionCreate from "../components/session/index"

const loggerMiddleware = store => next => action =>{
    const result = next(action)
    console.log("Middleware ",store.getState())
    return result
}

const store = createStore(rootReducer,applyMiddleware(loggerMiddleware))

store.subscribe (throttle(() => { 
    console.log("store", JSON.stringify(store.getState()))
    const serializedState = JSON.stringify(store.getState());
    localStorage.setItem('cart_user', serializedState);
    //console.log(store.getState())
  },1000));

console.log(store.getState())
export default ({children},props) => (
    <Provider store={store}>
        <SessionCreate></SessionCreate>
        <div className="container">
            {children}
        </div>
    </Provider>
)