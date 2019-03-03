import React from "react"

const Select = props => {
    return (
      <div className="form-group-cat">
        <select
          id={props.name}
          name={props.name}
          onChange={props.handleСhange}
          className={"form-control-cat "+(props.classModif)}
        >
          {props.options.map(option => {
            return (
              <option key={option} value={option} label={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    );
  };
  
  export default Select;