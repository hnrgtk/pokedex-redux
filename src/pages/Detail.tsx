/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import BarChart from "../components/Detail/BarChart";
import { fetchPokemonByName } from "../redux/pokemonSlice";
import { RootState } from "../redux/store";
import { headTitle } from "../utils/headTitle";
import TypeAndWeakness from "../components/Detail/TypeAndWeakness";
import PokemonName from "../components/Detail/PokemonName";
import PokemonSprite from "../components/Detail/PokemonSprite";
import PokemonStats from "../components/Detail/PokemonStats";

const Detail = () => {
  const { pathname } = useLocation();
  const { pokemon } = useSelector((state: RootState) => state.pokemon);

  const dispatch = useDispatch();

  useEffect(() => {
    const title = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    headTitle({
      title,
    });
  }, [pokemon]);

  useEffect(() => {
    if (!pokemon.name) {
      const pokemonName = pathname.split("/")[2];
      dispatch(fetchPokemonByName(pokemonName));
    }
  }, [pokemon]);

  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <PokemonName
        id={pokemon.id}
        name={pokemon.name}
        type={pokemon.types[0]}
      />
      <div className="px-2 md:px-16 lg:px-72 xl:px-96">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <PokemonSprite name={pokemon.name} sprite={pokemon.sprite} />
          <div>
            <p className="text-lg mb-12">{pokemon.flavorText}</p>
            <PokemonStats
              height={pokemon.height}
              weight={pokemon.weight}
              moves={pokemon.moves}
            />
            <TypeAndWeakness
              types={pokemon.types}
              weakness={pokemon.weakness}
            />
          </div>
        </div>
        <div className="block bg-gray-50 rounded-2xl p-4 border-2 border-gray-200">
          <p className="text-xl mb-6">Stats</p>
          <BarChart data={pokemon.stats} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
