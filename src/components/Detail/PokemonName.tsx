import { POKEAPI_TYPE_TO_COLOR } from "../../utils/pokemonColorByType";

type PokemonNameProps = {
  name: string;
  type: string;
  id: number;
};

const PokemonName = ({ name, type, id }: PokemonNameProps) => {
  return (
    <div className="w-full flex justify-center">
      <div
        className={`space-x-2 mb-10 py-3 
		md:rounded-b-3xl w-full md:w-96 flex justify-center
		bg-${POKEAPI_TYPE_TO_COLOR[type]}`}
      >
        <h1 className="font-bold text-4xl capitalize text-gray-900">{name}</h1>
        <p className="text-4xl text-gray-800">#{id}</p>
      </div>
    </div>
  );
};
export default PokemonName;
