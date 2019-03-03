import React from "react"
import CatList from "./cat-prod-list"
import Select from "./cat-select"

export default (props) => (
        <CatList 
            data={props.data}
            optionsPrice={props.optionsPrice}
            optionsColor={props.optionsColor}
            optionsSize={props.optionsSize}
        />
)