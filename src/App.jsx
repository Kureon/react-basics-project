import { useState } from "react";
import { data } from "./utils/data";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./components/RecipePage";

export const App = () => {
  // Your state code here
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <>
      <div>
        {selectedRecipe ? (
          <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
        ) : (
          <RecipeListPage recipes={data.hits} clickFn={setSelectedRecipe} />
        )}
      </div>
    </>
  );
};
