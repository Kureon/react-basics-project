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
  label,
  image,
  mealType,
  dishType,
  cautions,
  dietLabels,
}) => {
  return (
    <Card maxW="m">
      <CardBody>
        <AspectRatio ratio={16 / 9}>
          <Image src={image} alt={label} borderRadius="lg" />
        </AspectRatio>
        <Text>{mealType}</Text>
        <Heading size="md">{label}</Heading>
        <Text>Dish: {dishType}</Text>
        {dietLabels && (
          <p>
            {dietLabels.map((dietLabel) => (
              <p key={dietLabel}>{dietLabel}</p>
            ))}
          </p>
        )}
        {cautions && (
          <div>
            <Text>Cautions:</Text>
            {cautions.map((caution) => (
              <p key={caution}>{caution}</p>
            ))}
          </div>
        )}
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};
