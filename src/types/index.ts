export interface PokemonData {
  count: number;
  next: string;
  previous: string;
  results?: ResultsEntity[] | null;
}
export interface ResultsEntity {
  name: string;
  url: string;
}

export type Pokemon = {
  id: number;
  name: string;
  stats: Array<number>;
  height: number;
  weight: number;
  sprite: string;
  sprites: {
    front_default: string;
  };
  xp: number;
  moves: Array<string>;
  speciesUrl: string;
  types: Array<string>;
  flavorText: string;
  weakness: Array<any>;
};
