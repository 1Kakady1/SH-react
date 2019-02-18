import React from "react";

const Input = props => {
  return (
    <div className="form-group form-group__usinfo">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <input
        className={"form-control "+(props.classmodif)}
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