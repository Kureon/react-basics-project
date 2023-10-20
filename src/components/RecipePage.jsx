import { Image, Heading, Text, Button } from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipePage = () => {
  console.log(data.hits[0].recipe.label);
  return (
    <>
      <Button>Back to recipes</Button>
      <div>
        <img src={data.hits[0].recipe.image} alt={data.hits[0].recipe.label} />
        {/* <Image src={data.hits.recipe.image} alt={data.hits.recipe.label} />
        <Text>{data.hits.recipe.mealType}</Text>
        <Heading>{data.hits.recipe.label}</Heading> */}
      </div>
    </>
  );
};
