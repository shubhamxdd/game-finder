import { Game } from "../types/gameTypes";
import { Genre } from "../types/genreTypes";
import useData from "./useData";

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
