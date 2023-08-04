import { GameQuery } from "../App";
import { Game } from "../types/gameTypes";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.queryText,
      },
    },
    [gameQuery]
  );

export default useGames;
