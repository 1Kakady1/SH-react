import React from "react"
import Arrivals from "./arrivals"

export default (props) => (
    <Arrivals  
        url = {props.url}
        classBtn ={props.classBtn} 
        titleBtn={props.titleBtn} 
        appeal={props.appeal}  
        explanation={props.explanation}
    />
)