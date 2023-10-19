import { useState } from "react";
import { Center, Heading, SimpleGrid, Input } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Center>
        <Heading>Your Recipe App</Heading>
      </Center>
      <Input
        placeholder="Search recipe"
        size="md"
        onChange={(event) => setSearch(event.target.value)}
      />
      <SimpleGrid minChildWidth="300px" gap={6}>
        {data.hits
          .filter((hit) => {
            const nameMatch = hit.recipe.label
              .toLowerCase()
              .includes(search.toLowerCase());
            const healthLabelsMatch = hit.recipe.healthLabels.some((label) =>
              label.toLowerCase().includes(search.toLowerCase())
            );

            return nameMatch || healthLabelsMatch;
          })
          .map((hit) => (
            <RecipeCard key={hit.recipe.label} {...hit.recipe} />
          ))}
      </SimpleGrid>
    </>
  );
};
