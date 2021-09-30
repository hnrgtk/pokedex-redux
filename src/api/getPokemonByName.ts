import api from "./config";

export const getPokemonByName = async (name: string) => {
  const { data } = await api.get("pokemon/" + name);

  const { data: species } = await api.get(data.species.url);

  data["flavorText"] = species.flavor_text_entries[1].flavor_text;

  return data;
};
