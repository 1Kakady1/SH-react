import React from "react"

function modifClass(modif) {
    let modifBuf = modif;
    if(modif === null || modif=== undefined)
    {
           modifBuf = "";
    }
    
    return modifBuf;
}

function printSubTitle(subTitle) {
    
    let subTit = subTitle;
    if(subTit === null || subTit=== undefined)
    {
        subTit = <p className="content-title__sub-title">{subTit}</p>;
    }
    
    return subTit;
}

export default (props,{children}) => (
    <div className="content-title">
        <h2 className={"content-title__title "+(modifClass(props.modifClass))}>{props.title}</h2>
        {printSubTitle(props.subTitle)}
        {props.children}
    </div>
)