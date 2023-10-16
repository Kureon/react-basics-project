import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
} from "@chakra-ui/react";

export const RecipeCard = ({ label, image }) => {
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardBody>
        <Image src={image} alt={label} borderRadius="lg" />
        <Heading size="md">{label}</Heading>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

{
  /* <div key={hit.recipe.label}>
          <h3>{hit.recipe.label}</h3>
          <img src={hit.recipe.image} alt={hit.recipe.label} />
          {hit.recipe.dietLabels && <p>{hit.recipe.dietLabels}</p>}
          {hit.recipe.cautions && <p>{hit.recipe.cautions}</p>}
          <p>{hit.recipe.mealType}</p>
          <p>{hit.recipe.dishType}</p> */
}
