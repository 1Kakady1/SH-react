import React from "react"
import CatList from "./cat-prod-list"

export default (props) => (
        <CatList 
            data={props.data}
            optionsPrice={props.optionsPrice}
            optionsColor={props.optionsColor}
            optionsSize={props.optionsSize}
        />
)