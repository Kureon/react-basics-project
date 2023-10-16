import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/ui/RecipeCard";

export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  console.log(data.hits[0].recipe.label);

  return (
    <>
      <Center>
        <Heading>Your Recipe App</Heading>
      </Center>
      <SimpleGrid minChildWidth="300px" gap={6}>
        {data.hits.map((hit) => (
          <RecipeCard key={hit.recipe.label} {...hit.recipe} />
        ))}
      </SimpleGrid>
    </>
  );
};
