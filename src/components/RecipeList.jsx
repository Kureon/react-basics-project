import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeList = () => {
  return (
    <>
      {data.hits.map((hit) => (
        <RecipeCard key={hit.recipe.label} {...hit.recipe} />
      ))}
    </>
  );
};
