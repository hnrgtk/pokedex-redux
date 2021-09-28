const Card = ({ pokemonSprite, pokemonName }: any) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
      <img src={pokemonSprite} alt={pokemonName} width="149" height="149" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <p className="text-center text-sm">
            {(pokemonName as string).toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
