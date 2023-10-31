import { useState } from "react";
import {
  Container,
  Center,
  Heading,
  SimpleGrid,
  Input,
} from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ recipes, clickFn }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Container maxW="xxl">
        <Center>
          <Heading m="2">Your Recipe App</Heading>
        </Center>
        <Input
          placeholder="Search recipe"
          size="md"
          mt="3"
          mb="5"
          onChange={(event) => setSearch(event.target.value)}
        />
        <SimpleGrid minChildWidth="300px" gap={6}>
          {recipes
            .filter((recipe) => {
              const nameMatch = recipe.recipe.label
                .toLowerCase()
                .includes(search.toLowerCase());

              const healthLabelsMatch = recipe.recipe.healthLabels.some(
                (label) => label.toLowerCase().includes(search.toLowerCase())
              );

              return nameMatch || healthLabelsMatch;
            })
            .map((recipe) => (
              <RecipeCard
                key={recipe.recipe.label}
                recipe={recipe}
                {...recipe.recipe}
                clickFn={clickFn}
              />
            ))}
        </SimpleGrid>
      </Container>
    </>
  );
};
