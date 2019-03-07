import React from "react"
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import rootReducer from "../redux/rootReducer";

const loggerMiddleware = store => next => action =>{
    const result = next(action)
    console.log("Middleware ",store.getState())
    return result
}
const store = createStore(rootReducer,applyMiddleware(loggerMiddleware))
export default ({children},props) => (
    <Provider store={store}>
        <div className="container">
            {children}
        </div>
    </Provider>
)