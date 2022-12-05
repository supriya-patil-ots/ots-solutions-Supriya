import React from "react";
function InputComponent({ props }) {
  return (
    <ul>
      {props.map((key) => {
        return <li>{key}</li>;
      })}
    </ul>
  );
}

export default InputComponent;
