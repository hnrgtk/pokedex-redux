import { PokemonData, ResultsEntity } from "../../types";
import api from "../config";

export const getPokemons = async () => {
  const { data } = await api.get("pokemon?limit=20&offset=20/");

  const { next, previous }: PokemonData = data;

  const pokemons: any[] = await Promise.all(
    data?.results?.map(async (poke: ResultsEntity) => {
      let { data } = await api.get(poke.url);
      return data;
    })
  );

  return {
    next,
    previous,
    pokemons,
  };
};
