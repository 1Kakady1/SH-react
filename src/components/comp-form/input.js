import React from "react";

function defClass(a){
  let cls = "form-group form-group__usinfo";
  if(a !== undefined){ 
    cls= a;
  }

  return  cls
}


const Input = props => {
  return (
    <div className={defClass(props.orderwrapper)}>
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <input
        className={"form-control "+(props.classmodif) }
        id={props.name}
        name={props.name}
        type={props.inputtype}
        value={props.value}
        onChange={props.handlechange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;