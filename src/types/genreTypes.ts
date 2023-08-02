interface Genre {
  id: number;
  name: string;
}

interface FetchGenres {
  count: number;
  results: Genre[];
}

export type { Genre, FetchGenres };
