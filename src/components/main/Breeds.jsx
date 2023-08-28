import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBreeds } from "../../features/Slice/breedsSlice";

import SearchFavBar from "../parts/SearchFavBar";
import BreedSelector from "../parts/BreedSelector";
import SelectedBreedImages from "../parts/SelectedBreedImages";

import BackButtonLogo from "../../media/svg/BackButtonLogo";

const Breeds = () => {
  const breeds = useSelector((state) => state.breeds);

  const dispatch = useDispatch();

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
    <>
      <SearchFavBar />
      <div className="breeds-container">
        <div className="breeds-nav">
          <button>
            <div className="back-button">
              <BackButtonLogo />
            </div>
          </button>
          <p>Breeds</p>
          <BreedSelector breeds={breeds} />
        </div>
        <SelectedBreedImages />
      </div>
    </>
  );
};

export default Breeds;
