import { POKEAPI_TYPE_TO_COLOR } from "../utils/pokemonColorByType";

const Card = ({ sprite, name, types }: any) => {
  return (
    <div
      className={`
				w-96 rounded shadow-lg
				bg-gray-100 cursor-pointer
				flex border border-${
          // @ts-ignore
          POKEAPI_TYPE_TO_COLOR[types[0]]
        }
				transition duration-500 ease-in-out
				hover:shadow-2xl
			`}
    >
      <img
        src={sprite}
        alt={name}
        width="auto"
        height="100px"
        className="bg-gray-200 px-2 rounded"
      />
      <div className="px-6 py-4 flex flex-col items-center w-full">
        <div className="font-bold text-lg mb-2 text-gray-900">
          <p className="text-center text-md font-bold">
            {(name as string).toUpperCase()}
          </p>
        </div>
        <div className="flex justify-center space-x-2">
          {types.map((type: string) => (
            <span
              className={`text-white uppercase rounded-md text-xs font-bold px-2 py-1 bg-${
                // @ts-ignore
                POKEAPI_TYPE_TO_COLOR[type]
              }`}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
