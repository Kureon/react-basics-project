import { useState } from "react";
import { Center, Heading, SimpleGrid, Input } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = () => {
  const [search, setSearch] = useState("");
  console.log(search);

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
            return search.toLowerCase() === ""
              ? hit.recipe.label
              : hit.recipe.label.toLowerCase().includes(search.toLowerCase());
          })
          .map((hit) => (
            <RecipeCard key={hit.recipe.label} {...hit.recipe} />
          ))}
      </SimpleGrid>
    </>
  );
};

// Search filter from: https://www.youtube.com/watch?v=xAqCEBFGdYk
