/* eslint-disable react/prop-types */

import React from "react";

// eslint-disable-next-line react/display-name
const Input = React.forwardRef((props, ref) =>  {
  return (
    <div className="input">
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} id={props.input.id} {...props.input}/>
    </div>  
  );
});



export default Input;
       