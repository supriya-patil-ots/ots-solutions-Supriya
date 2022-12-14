import "./index.css";
import React, { useEffect, useState } from "react";

const List = ({ recipes, selectRecipe, deleteRecipe, editRecipe }) => {
  console.log("list", recipes);

  return (
    <div>
      <h2>Recipe Details</h2>
      <ul className="list">
        {recipes.map((item, index) => (
          <li key={index} onClick={() => selectRecipe(index)}>
            <p>Recipe Name : {item.recipe}</p>
            <p>Chef Name : {item.chef}</p>
            <button className="edit" onClick={() => editRecipe(index)}>
              Edit
            </button>
            <button className="delete" onClick={() => deleteRecipe()}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
