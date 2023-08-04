import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../types/gameTypes";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCorppedImageUrl from "../services/image-url";
import EmojiRating from "./EmojiRating";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={getCorppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <EmojiRating rating={game.rating_top} />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
