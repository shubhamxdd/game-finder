interface Game {
  id: number;
  name: string;
}
interface FetchGames {
  count: number;
  results: Game[];
}

export type { Game, FetchGames };
