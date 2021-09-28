import { useEffect } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNextPokemons,
  fetchPokemons,
  setPokemon,
} from "../redux/pokemonSlice";
import { useHistory } from "react-router";

const Home = () => {
  const dispatch = useDispatch();
  const { pokemons, nextUrl } = useSelector((state: any) => state.pokemon);
  const { push } = useHistory();

  useEffect(() => {
    if (nextUrl) return;
    dispatch(fetchPokemons());
  }, []);

  return (
    <div className="w-full h-full px-4">
      <div className="flex justify-center my-10">
        <SearchBar />
      </div>
      <div className="grid grid-cols-4 gap-10 mb-10">
        {pokemons &&
          pokemons?.map((poke: any) => (
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
      <div className="flex justify-center mb-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(fetchNextPokemons())}
        >
          CARREGAR MAIS
        </button>
      </div>
    </div>
  );
};

export default Home;
