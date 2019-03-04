import React from "react"
import {createStore} from "redux"
import {Provider} from "react-redux"
import rootReducer from "../redux/rootReducer";

const store = createStore(rootReducer)

export default ({children},props) => (
    <Provider store={store}>
        <div className="container">
            {children}
        </div>
    </Provider>
)