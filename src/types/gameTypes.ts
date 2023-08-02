interface Game {
  id: number;
  name: string;
  background_image: string;
}
interface FetchGames {
  count: number;
  results: Game[];
}

export type { Game, FetchGames };
