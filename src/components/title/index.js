import React from "react"
import Title from "./title"

export default (props) => (
    <Title title={props.title} subTitle={props.subTitle} modifClass={props.modifClass}>
        {props.children}
    </Title>
)