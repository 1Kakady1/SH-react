import React from "react"
import { Link } from "gatsby"


export default (props) => (
    <div className="nav-site">
        <Link to="/" className="bar-link"  state={{pleasant: "reasonably",}}>
            <span className="bar-link__name">Home</span>
        </Link>
        <div className="sl">/</div>
        {props.children}
    </div>
)
