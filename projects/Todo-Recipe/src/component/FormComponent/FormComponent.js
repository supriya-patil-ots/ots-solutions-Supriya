import React, { useEffect, useState } from "react";
import "./FormComponent.css";
const FormComponent = ({ addRecipe, updatedetails, updateRecipe }) => {
  console.log("updated", updatedetails);
  const [details, setDetails] = useState({
    recipe: "",
    chef: "",
    instruction: "",
  });

  useEffect(() => {
    if (updatedetails) {
      setDetails({
        recipe: updatedetails.recipe,
        chef: updatedetails.chef,
        instruction: updatedetails.instruction,
      });
    }
  }, [updatedetails]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    console.log(details);
    const { recipe, chef, instruction } = details;
    if (recipe && chef && instruction) {
      addRecipe({ recipe, chef, instruction });
      setDetails({ recipe: "", chef: "", instruction: "" });
    }
  };
  console.log(details);

  const handleUpdate = (index) => {
    const { recipe, chef, instruction } = details;
    updateRecipe(index, { recipe, chef, instruction });
  };

  return (
    <div>
      <h1>Recipe Information </h1>

      <input
        id="inputField"
        name="recipe"
        type="text"
        value={details.recipe}
        placeholder="Enter Recipe name"
        onChange={handleChange}
      ></input>
      <br />
      <input
        id="inputField"
        type="text"
        name="chef"
        value={details.chef}
        placeholder="Enter Chef name"
        onChange={handleChange}
      ></input>
      <br />
      <input
        id="inputField"
        type="text"
        name="instruction"
        placeholder="Enter Instruction"
        value={details.instruction}
        onChange={handleChange}
      ></input>
      <br />
      {updatedetails ? (
        <button className="update" onClick={handleUpdate}>
          Update
        </button>
      ) : (
        <button className="add" onClick={handleSubmit}>
          Add
        </button>
      )}
    </div>
  );
};

export default FormComponent;
