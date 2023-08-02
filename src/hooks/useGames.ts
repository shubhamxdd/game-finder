import { Game } from "../types/gameTypes";
import useData from "./useData";

const useGames = () => useData<Game>("/games");

export default useGames;
