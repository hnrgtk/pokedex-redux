import api from "./config";
import _ from "lodash";

export const getPokemonByName = async (name: string) => {
  const { data } = await api.get("pokemon/" + name);

  const { data: species } = await api.get(data.species.url);

  const weakness = await Promise.all(
    data.types.map(async (t: any) => {
      let { data } = await api.get(t.type.url);
      return data.damage_relations.double_damage_from.map((w: any) => w.name);
    })
  );

  data["flavorText"] = species.flavor_text_entries[1].flavor_text;
  data["weakness"] = _.uniq(_.flatMap(weakness));

  return data;
};
