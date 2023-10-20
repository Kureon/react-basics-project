import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./components/RecipePage";

export const App = () => {
  // Your state code here
  const [selectedRecipe, setSelectedRecipe] = useState();

  // const recipeClick = (recipe) => {
  //   setSelectedRecipe(recipe);
  // };

  // const backClick = () => {
  //   setSelectedRecipe();
  // };

  return (
    <>
      {/* <div>
        {selectedRecipe ? (
          <RecipePage recipe={selectedRecipe} onClick={backClick} />
        ) : (
          <RecipeListPage onClick={recipeClick} />
        )}
      </div> */}

      <div>{selectedRecipe ? <RecipeListPage /> : <RecipePage />}</div>
    </>
  );
};
