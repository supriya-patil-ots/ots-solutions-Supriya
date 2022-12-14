import React from "react";
import "./ReceipeDetails.css";

const ReceipeDetails = ({ details }) => {
  console.log(details);
  return (
    <>
      <h2>Recipe Description</h2>
      <p>
        <b>Recipe Name</b> : {details && details.recipe}
      </p>
      <p>
        <b>Cheif Name</b> : {details && details.chef}
      </p>
      <p>
        <b>Instruction</b>: {details && details.instruction}
      </p>
    </>
  );
};
export default ReceipeDetails;
