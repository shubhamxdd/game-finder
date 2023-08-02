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
  metacritic: number;
}

export type { Game, Platform };
