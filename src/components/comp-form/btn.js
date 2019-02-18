import React from "react";

const Button = props => {

  return (
    <button
      style={props.style}
      className={
        props.type == "primary" ? "btn-form btn-form__primary" : "btn-form btn-form__secondary"
      }
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

export default Button;