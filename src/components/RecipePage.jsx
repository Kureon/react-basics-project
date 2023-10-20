import { Image, Heading, Text, Button } from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipePage = () => {
  return (
    <>
      <Button>Back to recipes</Button>
      <div>
        <Image src={data.hits.recipe.image} alt={data.hits.recipe.label} />
        <Text>{data.hits.recipe.mealType}</Text>
        <Heading>{data.hits.recipe.label}</Heading>
      </div>
    </>
  );
};
