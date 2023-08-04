import { Platform } from "../types/gameTypes";
import useData from "./useData";

const usePlatform = () => useData<Platform>("/platforms/lists/parents");

export default usePlatform;
