import React from "react"
import { withPrefix } from 'gatsby'
import ReactWOW from 'react-wow'

const urlImg = withPrefix('/img/')

export default (props,{children}) => (
    <div className="about">
        <ReactWOW animation={props.classAnimate}>
            <div className="preview preview__about_size">
                <img src={(urlImg)+"/"+ props.img} alt={props.alt} className="preview__img"/>
            </div>
        </ReactWOW>
        <div className="content">
            {props.children}
        </div>
    </div>
)