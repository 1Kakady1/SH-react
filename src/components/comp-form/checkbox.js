import React from "react";

const CheckBox = (props) => {
    return (
        <div className={`${props.orderwrapper ? props.orderwrapper :"form-group form-group__usinfo"}`}>
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