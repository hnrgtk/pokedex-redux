import { POKEAPI_TYPE_TO_COLOR } from "../utils/pokemonColorByType";

const Card = ({ sprite, name, types }: any) => {
  return (
    <div
      className={`
				w-4/6 rounded overflow-hidden shadow-xl bg-gray-100 cursor-pointer
			`}
    >
      <img
        src={sprite}
        alt={name}
        width="100%"
        height="149"
        className="bg-gray-200"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <p className="text-center text-md font-bold">
            {(name as string).toUpperCase()}
          </p>
        </div>
        <div className="flex justify-center space-x-5">
          {types.map((type: string) => (
            <span
              className={`uppercase text-sm rounded-md font-bold px-2 py-1 bg-${
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
