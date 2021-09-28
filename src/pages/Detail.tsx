import { useSelector } from "react-redux";

const Detail = () => {
  const { pokemon } = useSelector((state: any) => state.pokemon);

  return <div>{pokemon.name}</div>;
};

export default Detail;
