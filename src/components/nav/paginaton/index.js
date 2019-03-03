import React from "react"
import Pagination from "./pagination"

export default (props) => (
    <Pagination 
        numPages={props.numPages} 
        currentPage={props.currentPage}
        catName={props.catName}
    />
)