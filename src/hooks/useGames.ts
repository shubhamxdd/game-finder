import { useEffect } from "react";
import { useState } from "react";
import { FetchGames, Game } from "../types/gameTypes";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGames>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);
  return { games, error };
};

export default useGames;
