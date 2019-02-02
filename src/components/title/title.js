import React from "react"


export default (props) => (
    <div className="content-title">
        <h2 className="content-title__title">{props.title}</h2>
        <p className="content-title__sub-title">{props.subTitle}</p>
    </div>
)