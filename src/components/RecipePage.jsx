import { Image, Heading, Text, Button } from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <>
      <Button onClick={() => clickFn()}>Back to recipes</Button>
      <div>
        <Image src={recipe.recipe.image} alt={recipe.recipe.label} />
        <Text>{recipe.recipe.mealType}</Text>
        <Heading>{recipe.recipe.label}</Heading>
      </div>
    </>
  );
};
