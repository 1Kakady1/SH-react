import React from "react"

function modifClass(modif) {
    let modifBuf = modif;
    console.log(modif)
    if(modif === null || modif=== undefined)
    {
           modifBuf = "";
    }
    
    return modifBuf;
}

export default (props,{children}) => (
    <div className="content-title">
        <h2 className={"content-title__title "+(modifClass(props.modifClass))}>{props.title}</h2>
        <p className="content-title__sub-title">{props.subTitle}</p>
        {props.children}
    </div>
)