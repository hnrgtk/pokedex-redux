import { PokemonData, ResultsEntity } from "./../types";
import api from "./config";

import _ from "lodash";

export const getPokemons = async (url: string) => {
  const { data } = await api.get("pokemon?" + url);

  const { next }: PokemonData = data;

  const pokemons: any[] = await Promise.all(
    data?.results?.map(async (poke: ResultsEntity) => {
      let { data } = await api.get(poke.url);
      let { data: species } = await api.get(data.species.url);

      const weakness = await Promise.all(
        data.types.map(async (t: any) => {
          let { data: weak } = await api.get(t.type.url);
          let data = weak.damage_relations.double_damage_from.map(
            (w: any) => w.name
          );
          return data;
        })
      );

      data["flavorText"] = species.flavor_text_entries[1].flavor_text;
      data["weakness"] = _.uniq(_.flatMap(weakness));
      return data;
    })
  );

  return {
    next,
    pokemons,
  };
};
