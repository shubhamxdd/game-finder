import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const HeadingT = ({ gameQuery }: Props) => {
  const head = ` 
  ${gameQuery.platform?.name || ""} 
  ${gameQuery.genre?.name || ""} 
  ${gameQuery.queryText || ""} Game
  `;
  return (
    <Heading as="h1" marginBottom={4} marginX={3}>
      {head}
    </Heading>
  );
};

export default HeadingT;
