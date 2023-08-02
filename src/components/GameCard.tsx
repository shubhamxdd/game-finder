import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../types/gameTypes";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          {game.parent_platforms.map(({ platform }) => {
            return <Text key={platform.id}>{platform.name}</Text>;
          })}
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
