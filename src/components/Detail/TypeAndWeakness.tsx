import { POKEAPI_TYPE_TO_COLOR } from "../../utils/pokemonColorByType";

type TypeAndWeaknessProps = {
  types: any[];
  weakness: string[];
};
const TypeAndWeakness = ({ types, weakness }: TypeAndWeaknessProps) => (
  <div className="flex flex-col">
    <p className="text-xl mb-4">Type</p>
    <div className="flex space-x-4 mb-4">
      {types?.map((type: string) => (
        <span
          key={type}
          className={`type-pill-detail bg-${POKEAPI_TYPE_TO_COLOR[type]}`}
        >
          {type}
        </span>
      ))}
    </div>
    <p className="text-xl mb-4">Weakness</p>
    <div className="flex flex-wrap mb-4">
      {weakness?.map((weak: string) => (
        <span
          key={weak}
          className={`type-pill-detail mr-4 mb-4 bg-${POKEAPI_TYPE_TO_COLOR[weak]}`}
        >
          {weak}
        </span>
      ))}
    </div>
  </div>
);

export default TypeAndWeakness;
