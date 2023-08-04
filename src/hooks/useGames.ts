import { Game, Platform } from "../types/gameTypes";
import { Genre } from "../types/genreTypes";
import useData from "./useData";

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
