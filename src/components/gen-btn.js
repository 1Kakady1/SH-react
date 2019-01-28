import React from "react"
//import genBtnStyle from '../styles/sass/genBtnStyle.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

function BtnIcon(props) {
    return <button className={props.classBtn}><FontAwesomeIcon icon={props.icon} className="genBtn_hover" /></button>;
  }
  
function BtnTitle(props) {
    return <button className={props.classBtn}>{props.title}</button>
  }

function WhatBtnUse(props){

    function concatArr(arr){
        const arrClass = arr.map((arr) => arr).join(' ');
        return arrClass;
    }


    let buf = null, bufClass= null, bufIcon=null;

    if(props.iconBtn === "search"){
        bufIcon = faSearch;
    }  else {
        bufIcon = false;
    }
    
    bufClass = concatArr(props.classBtn);

    if(bufIcon !== false){
        buf = <BtnIcon classBtn={bufClass} icon={bufIcon} />
    } else {
        buf = <BtnTitle classBtn={bufClass} title={props.title}/>
    }

    return buf
}

export default (props) => (
    <WhatBtnUse iconBtn = {props.icon}  classBtn ={props.classBtn} title={props.title} />
)

