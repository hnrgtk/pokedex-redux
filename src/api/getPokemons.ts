import { PokemonData, ResultsEntity } from "./../types";
import api from "./config";

export const getPokemons = async (url: string) => {
  const { data } = await api.get("pokemon?" + url);

  const { next }: PokemonData = data;

  const pokemons: any[] = await Promise.all(
    data?.results?.map(async (poke: ResultsEntity) => {
      let { data } = await api.get(poke.url);
      return data;
    })
  );

  return {
    next,
    pokemons,
  };
};
