import {
  Card,
  CardBody,
  CardFooter,
  Image,
  AspectRatio,
  Heading,
  Text,
} from "@chakra-ui/react";

export const RecipeCard = ({
  recipeClick,
  label,
  image,
  mealType,
  dishType,
  cautions,
  dietLabels,
  healthLabels,
}) => {
  return (
    <Card maxW="m" onClick={recipeClick}>
      <CardBody>
        <AspectRatio ratio={16 / 9}>
          <Image src={image} alt={label} borderRadius="lg" />
        </AspectRatio>
        <Text>{mealType}</Text>
        <Heading size="md">{label}</Heading>
        <Text>Dish: {dishType}</Text>

        {dietLabels && (
          <div>
            {dietLabels.map((dietLabel) => (
              <p key={dietLabel}>{dietLabel}</p>
            ))}
          </div>
        )}

        {cautions && (
          <div>
            <Text>Cautions:</Text>
            {cautions.map((caution) => (
              <p key={caution}>{caution}</p>
            ))}
          </div>
        )}

        {healthLabels.includes("Vegetarian") && <Text>Vegetarian</Text>}
        {healthLabels.includes("Vegan") && <Text>Vegan</Text>}
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};
