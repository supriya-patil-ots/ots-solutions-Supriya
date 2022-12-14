import "./App.css";
import React, { useState } from "react";
import FormComponent from "./component/FormComponent/FormComponent";
import List from "./component/UlComponent";
import ReceipeDetails from "./component/ReceipeDetails/ReceipeDetails";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectIndex, setSelectIndex] = useState(null);
  const [updateIndex, setUpdateIndex] = useState(null);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = () => {
    setRecipes((recipes) =>
      recipes.filter((currentIteration, index) => index != selectIndex)
    );
    setSelectIndex(null);
  };

  const editRecipe = (index) => {
    setUpdateIndex(index);
  };

  const selectRecipe = (index) => {
    setSelectIndex(index);
  };

  const updateRecipe = (index, modifiedRecipe) => {
    recipes.splice(index, 1, modifiedRecipe);
    setRecipes([...recipes]);
    console.log(recipes);
  };

  return (
    <div className="App">
      <div className="left-compinent">
        <FormComponent
          addRecipe={addRecipe}
          updatedetails={recipes[updateIndex]}
          updateRecipe={updateRecipe}
        />
        <List
          recipes={recipes}
          selectRecipe={selectRecipe}
          deleteRecipe={deleteRecipe}
          editRecipe={editRecipe}
        />
      </div>
      <div className="right-component">
        <ReceipeDetails details={recipes[selectIndex]} />
      </div>
    </div>
  );
}

export default App;
