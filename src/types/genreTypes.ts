interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenres<T> {
  count: number;
  results: T[];
}

export type { Genre, FetchGenres };
