import React from "react"
import { withPrefix } from 'gatsby'

const urlImg = withPrefix('/img/')

export default (props,{children}) => (
    <div className="about">
        <div className="preview preview__about_size">
            <img src={(urlImg)+"/"+ props.img} alt={props.alt} className="preview__img"/>
        </div>
        <div className="content">
            {props.children}
        </div>
    </div>
)