import { useEffect, useState } from "react";
import { getPokemons } from "./api/queries/getPokemons";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [pokemons, setPokemons] = useState<any>([]);

  useEffect(() => {
    (async function () {
      const { pokemons } = await getPokemons();
      setPokemons(pokemons);
    })();
  }, []);
  console.log(pokemons[0]?.sprites);

  return (
    <div className="w-full h-full px-4">
      <div className="flex justify-center">
        <SearchBar />
      </div>
      <div className="grid grid-cols-10 gap-5 mb-10">
        {pokemons &&
          pokemons?.map((poke: any) => (
            <div className="flex justify-center">
              <Card
                key={poke.id}
                pokemonSprite={poke.sprites.front_default}
                pokemonName={poke.name}
              />
            </div>
          ))}
      </div>
      <div className="flex justify-center mb-10">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          CARREGAR MAIS
        </button>
      </div>
    </div>
  );
};

export default App;
