import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

function BtnIcon(props) {
    return <button className={props.classBtn}><FontAwesomeIcon icon={props.icon} className="genBtn_hover" /></button>;
  }
  
function BtnTitle(props) {
    return <button className={props.classBtn}>{props.title}</button>
  }

function ButtonCustom(props){

    function concatArr(arr){
        const arrClass = arr.map((arr) => arr).join(' ');
        return arrClass;
    }

    if(props.iconBtn === "search"){
        return <BtnIcon classBtn={concatArr(props.classBtn)} icon={faSearch} />
    } else {
        return <BtnTitle classBtn={concatArr(props.classBtn)} title={props.title}/>
    }
}

export default (props) => (
    <ButtonCustom iconBtn = {props.icon}  classBtn ={props.classBtn} title={props.title} />
)

