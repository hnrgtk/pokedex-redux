/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import api from "../api/config";
import BarChart from "../components/BarChart";
import { POKEAPI_TYPE_TO_COLOR } from "../utils/pokemonColorByType";
import { setPokemon } from "../redux/pokemonSlice";

const Detail = () => {
  const { pathname } = useLocation();
  const { pokemon } = useSelector((state: any) => state.pokemon);
  const dispatch = useDispatch();
  const [flavorText, setFlavorText] = useState("");
  const [baseStats, setBaseStats] = useState<any>([]);

  // Efeito para recuperar dados quando a página é recarregada.
  useEffect(() => {
    if (!pokemon.name) {
      const pokemonName = pathname.split("/")[2];
      (async function () {
        const { data } = await api.get(`/pokemon/${pokemonName}/`);
        dispatch(setPokemon(data));
      })();
    }
  }, []);

  // Efeito para pegar dados aninhados com outra requisição.
  useEffect(() => {
    if (pokemon.name) {
      (async function () {
        const { data } = await api.get(pokemon.speciesUrl);
        setFlavorText(data.flavor_text_entries[1].flavor_text);
        setBaseStats(pokemon.stats);
      })();
    }
  }, [pokemon]);

  return (
    <div className="px-2 md:px-16 lg:px-72 xl:px-96  mt-12">
      <div className="flex justify-center space-x-2 mb-10">
        <h1 className="font-bold text-4xl capitalize">{pokemon.name}</h1>
        <p className="text-4xl text-gray-500">#{pokemon.id}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-10">
        <div
          className="flex justify-center bg-gray-50 rounded-2xl"
          style={{
            width: "420px",
          }}
        >
          <img src={pokemon.sprite} alt={pokemon.name} width="100%" />
        </div>
        <div>
          <p className="text-lg mb-12">{flavorText}</p>
          <div
            style={{ backgroundColor: "#30a7d7" }}
            className="grid grid-cols-2 w-full rounded-2xl p-6 mb-10"
          >
            <div>
              <p className="white-p">Height</p>
              <p className="black-p">{pokemon.height} (dm)</p>
              <p className="white-p">Weight</p>
              <p className="black-p">{pokemon.weight} (hg)</p>
            </div>
            <div>
              <p className="white-p">Abilities</p>
              {pokemon?.moves?.map((move: string) => (
                <p className="capitalize black-p">{move.replace("-", " ")}</p>
              ))}
            </div>
          </div>
          <p className="text-xl mb-6">Type</p>
          <div className="flex space-x-4">
            {pokemon?.types?.map((type: string) => (
              <span
                key={type}
                className={`type-pill-detail bg-${POKEAPI_TYPE_TO_COLOR[type]}`}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="block bg-gray-100 rounded-2xl p-4 mb-24">
        <p className="text-xl mb-6">Stats</p>
        <BarChart value={baseStats} />
      </div>
    </div>
  );
};

export default Detail;
