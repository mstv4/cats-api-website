import SearchFavBar from "../parts/SearchFavBar";
import BreedSelector from "../parts/BreedSelector";
import SelectedBreedImages from "../parts/SelectedBreedImages";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setBreeds } from "../../features/Slice/breedsSlice";

const Breeds = () => {
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.breeds);

  useEffect(() => {
    async function fetchBreeds() {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/breeds/");
        const data = await response.json();
        dispatch(setBreeds(data));
      } catch (error) {
        console.error(error);
      }
    }

    fetchBreeds();
  }, [dispatch]);
  return (
    <div>
      <SearchFavBar />
      <h2>Breeds</h2>
      <BreedSelector breeds={breeds} />
      <SelectedBreedImages />
    </div>
  );
};

export default Breeds;
