import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setPokemon } from "../../redux/pokemonSlice";
import { AppDispatch } from "../../redux/store";
import { Pokemon } from "../../types";
import Card from "./Card";

type PokemonListProps = {
  pokemons: Pokemon[];
};

const PokemonList = ({ pokemons }: PokemonListProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { push } = useHistory();

  return (
    <div className="pokemon-grid-list">
      {pokemons?.map((poke: Pokemon) => (
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
  );
};

export default PokemonList;
