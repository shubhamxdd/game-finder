import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../types/gameTypes";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCorppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden" width="300px">
        <Image src={getCorppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
