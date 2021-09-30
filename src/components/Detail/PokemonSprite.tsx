type PokemonSpriteProps = {
  sprite: string;
  name: string;
};

const PokemonSprite = ({ sprite, name }: PokemonSpriteProps) => {
  return (
    <div className="flex justify-center bg-gray-50 rounded-3xl border-2 border-gray-200">
      <img src={sprite} alt={name} className="w-3/5 md:w-4/5" />
    </div>
  );
};

export default PokemonSprite;
