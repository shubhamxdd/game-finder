interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}
interface FetchGames {
  count: number;
  results: Game[];
}

export type { Game, FetchGames, Platform };
