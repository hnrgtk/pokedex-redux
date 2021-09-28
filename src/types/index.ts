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
