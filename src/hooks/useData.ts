import { useEffect, useState } from "react";
import { FetchGenres } from "../types/genreTypes";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenres<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setData(res.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { data, error, isLoading };
};

export default useData;
