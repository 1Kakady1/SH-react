import React from "react"
import { Link } from "gatsby"

export default (props) => (
    <div className="arrivals">
        <h1 className="arrivals__appeal">{props.appeal}</h1>
        <h2 className="arrivals__explanation">{props.explanation}</h2>
        <Link to={props.url}  state={{pleasant: "reasonably",}} className={props.classBtn}>
            {props.titleBtn}
        </Link>
    </div>
)