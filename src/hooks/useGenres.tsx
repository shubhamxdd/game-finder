import { useEffect, useState } from "react";
import { Genre, FetchGenres } from "../types/genreTypes";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenres>("/genres", { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setGenres(res.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
