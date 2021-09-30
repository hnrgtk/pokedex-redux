const Card = ({ sprite, name, types }: any) => {
  const POKEAPI_TYPE_TO_COLOR: Record<string, string> = {
    bug: "green-400",
    dark: "gray-800",
    dragon: "purple-800",
    electric: "yellow-400",
    fairy: "pink-400",
    fighting: "red-900",
    fire: "red-400",
    flying: "indigo-600",
    ghost: "indigo-700",
    grass: "green-600",
    ground: "yellow-700",
    ice: "blue-400",
    normal: "gray-500",
    poison: "purple-600",
    psychic: "pink-700",
    rock: "yellow-600",
    steel: "gray-400",
    water: "blue-500",
  };
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
          {types.map((type: string) => (
            <span
              key={type}
              className={`type-pill bg-${POKEAPI_TYPE_TO_COLOR[type]}`}
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
