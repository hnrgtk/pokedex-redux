/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNextPokemons,
  fetchPokemons,
  fetchSearchPokemonByName,
  setPokemon,
} from "../redux/pokemonSlice";
import { useHistory } from "react-router";
import { Pokemon } from "../types";
import { AppDispatch, RootState } from "../redux/store";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState<string>("");
  const { nextUrl, pokemons } = useSelector(
    (state: RootState) => state.pokemon
  );
  const { push } = useHistory();

  useEffect(() => {
    if (nextUrl) return;
    dispatch(fetchPokemons());
  }, []);

  const handleSearch = () => {
    if (!search) return dispatch(fetchPokemons());
    dispatch(fetchSearchPokemonByName(search));
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 px-4">
      <div className="flex justify-center py-8">
        <SearchBar {...{ handleSearch, setSearch, search }} />
      </div>
      <div className="pokemon-grid-list">
        {pokemons?.map((poke: Pokemon) => (
          <div
            key={poke.id}
            className="flex justify-center"
            onClick={() => {
              dispatch(setPokemon(poke));
              push(`/pokemon/${poke.name}`);
            }}
          >
            <Card
              name={poke.name}
              sprite={poke.sprites.front_default}
              types={poke.types.map((t: any) => t.type.name)}
            />
          </div>
        ))}
      </div>
      {pokemons.length > 1 && (
        <div className="flex justify-center mb-10">
          <button
            className="load-more-pokemons"
            onClick={() => dispatch(fetchNextPokemons())}
          >
            LOAD MORE POKEMONS
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
