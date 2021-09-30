import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import { fetchNextPokemons } from "../../redux/pokemonSlice";
import { AppDispatch } from "../../redux/store";
type LoadMoreButtonProps = {
  isLoading: boolean;
};
const LoadMoreButton = ({ isLoading }: LoadMoreButtonProps) => {

  const dispatch = useDispatch<AppDispatch>();

  return (
    <button
      className="load-more-pokemons"
      onClick={() => dispatch(fetchNextPokemons())}
    >
      {isLoading ? (
        <ClipLoader color="#fff" size={26} />
      ) : (
        <p>LOAD MORE POKEMONS</p>
      )}
    </button>
  );
};

export default LoadMoreButton;
