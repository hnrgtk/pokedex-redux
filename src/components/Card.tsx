import {  POKEAPI_TYPE_TO_COLOR } from "../utils/pokemonColorByType";

type CardProps = {
  sprite: string;
  name: string;
  types: Array<string>;
};

const Card = ({ sprite, name, types }: CardProps) => {
  return (
    <div
      className={`
				w-96 rounded shadow-lg
				bg-gray-100 cursor-pointer
				flex border border-${POKEAPI_TYPE_TO_COLOR[types[0]]}
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
        <div className="font-bold text-lg mb-2">
          <p className="text-center text-md font-bold text-gray-900">
            {(name as string).toUpperCase()}
          </p>
        </div>
        <div className="flex justify-center space-x-2">
          {types.map((type: string) => {
            return (
              <span key={type} className={`type-pill bg-${POKEAPI_TYPE_TO_COLOR[type]}`}>
                {type}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
