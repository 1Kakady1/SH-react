import React from "react"
import { withPrefix } from 'gatsby'

const urlImg = withPrefix('/img/')

export default (props) => (
        <div className="sliderV-item" key={props.itemKey}>
            <img src={(urlImg)+"/"+ props.imageGal} alt="prod"/>
        </div>
)