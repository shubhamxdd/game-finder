interface Genre {
  id: number;
  name: string;
}

interface FetchGenres<T> {
  count: number;
  results: T[];
}

export type { Genre, FetchGenres };
