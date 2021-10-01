/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import SearchBar from "../components/Home/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons, fetchSearchPokemonByName } from "../redux/pokemonSlice";
import { AppDispatch, RootState } from "../redux/store";
import PokemonList from "../components/Home/PokemonList";
import LoadMoreButton from "../components/Home/LoadMoreButton";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState<string>("");
  const { nextUrl, pokemons, isLoading } = useSelector(
    (state: RootState) => state.pokemon
  );

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
      <PokemonList {...{ pokemons }} />
      {pokemons.length > 1 && (
        <div className="flex justify-center pb-12">
          <LoadMoreButton {...{ isLoading }} />
        </div>
      )}
    </div>
  );
};

export default Home;
