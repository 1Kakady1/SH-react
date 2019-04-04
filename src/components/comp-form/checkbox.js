import React from "react";

function defClass(a){
    let cls = "form-group form-group__usinfo";
    if(a !== undefined){ 
      cls= a;
    }
  
    return  cls
  }

const CheckBox = (props) => {
    return (
        <div className={defClass(props.orderwrapper)}>
         
            <input
                className={"form-control "+(props.classmodif) }
                id={props.name}
                name={props.name}
                type="checkbox"
                onChange={props.handlechange}
              />
        </div>
      );
    };

export default CheckBox;