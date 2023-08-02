import { useEffect } from "react";
import { useState } from "react";
import { FetchGames, Game } from "../types/gameTypes";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGames>("/games", { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setGames(res.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { games, error, isLoading };
};

export default useGames;
