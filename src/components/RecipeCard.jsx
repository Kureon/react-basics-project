import {
  Card,
  CardBody,
  CardFooter,
  Image,
  AspectRatio,
  Heading,
  Text,
  Tag,
} from "@chakra-ui/react";

export const RecipeCard = ({
  recipe,
  clickFn,
  label,
  image,
  mealType,
  dishType,
  cautions,
  dietLabels,
  healthLabels,
}) => {
  // console.log("Cautions Array:", cautions);

  return (
    <Card maxW="m" onClick={() => clickFn(recipe)}>
      <CardBody>
        <AspectRatio ratio={16 / 9}>
          <Image src={image} alt={label} borderRadius="lg" />
        </AspectRatio>
        <Text mt="2" mb="2" textTransform="uppercase">
          {mealType}
        </Text>
        <Heading mt="2" size="md">
          {label}
        </Heading>
        <Text mb="2">Dish: {dishType}</Text>
        {healthLabels.includes("Vegetarian") && (
          <Tag m="1" bg="violet">
            Vegetarian
          </Tag>
        )}
        {healthLabels.includes("Vegan") && (
          <Tag m="1" bg="violet">
            Vegan
          </Tag>
        )}
        {dietLabels && (
          <div>
            {dietLabels.map((dietLabel) => (
              <Tag m="1" bg="lightgreen" key={dietLabel}>
                {dietLabel}
              </Tag>
            ))}
          </div>
        )}

        {cautions && (
          <div>
            <Text mt="2">Cautions:</Text>
            {cautions.map((caution) => (
              <Tag m="1" bg="crimson" key={caution}>
                {caution}
              </Tag>
            ))}
          </div>
        )}
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};
