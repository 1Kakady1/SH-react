import React from "react"
function xx(params) {
    console.log(params)
    return true
}
export default (props) => (
    <div>
        {xx(props.data)}
    </div>
)