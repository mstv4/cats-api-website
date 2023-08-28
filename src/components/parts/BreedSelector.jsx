import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setImages } from "../../features/Slice/imagesSlice";

function BreedSelector({ breeds }) {
  const dispatch = useDispatch();
  const [selectedBreed, setSelectedBreed] = useState("all");

  const fetchImages = useCallback(async (breedId) => {
    try {
      let url = "https://api.thecatapi.com/v1/images/search?limit=10";
      if (breedId !== "all") {
        url += `&breed_ids=${breedId}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      dispatch(setImages(data));
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchImages(selectedBreed);
  }, [fetchImages, selectedBreed]);

  const handleBreedChange = (breedId) => {
    setSelectedBreed(breedId);
    fetchImages(breedId);
  };

  return (
    <div>
      <select
        onChange={(e) => handleBreedChange(e.target.value)}
        value={selectedBreed}
      >
        <option value="all">all</option>
        {breeds.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BreedSelector;
