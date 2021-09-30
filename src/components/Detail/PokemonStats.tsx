type ContainerStatsProps = {
  height: number;
  weight: number;
  moves: any[];
};

const PokemonStats = ({ height, weight, moves }: ContainerStatsProps) => (
  <div
    className="grid grid-cols-2 w-full rounded-2xl p-6 mb-10 bg-gray-50 border-2 border-gray-200"
  >
    <div>
      <p className="white-p">Height</p>
      <p className="black-p">{height} (dm)</p>
      <p className="white-p">Weight</p>
      <p className="black-p">{weight} (hg)</p>
    </div>
    <div>
      <p className="white-p">Abilities</p>
      {moves?.map((move: string) => (
        <p key={move} className="capitalize black-p">
          {move.replace("-", " ")}
        </p>
      ))}
    </div>
  </div>
);

export default PokemonStats;
