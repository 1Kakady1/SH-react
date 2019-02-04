import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

function IconBtn(props) {
    if(props.icon==="left"){
        return <FontAwesomeIcon icon={faCaretLeft}  className="slick-arrow__icon"/>
    }  else {
        return <FontAwesomeIcon icon={faCaretRight}  className="slick-arrow__icon"/>
    }
}

export default (props) => (
    <button type="button" data-role="none" className={"slick-arrow "+(props.class)}>
       <IconBtn icon={props.icon} />
    </button> 
)