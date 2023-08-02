import { Genre } from "../types/genreTypes";
import useData from "./useData";

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
