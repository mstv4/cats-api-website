import React from "react";
import { useSelector } from "react-redux";

function SelectedBreedImages() {
  const images = useSelector((state) => state.images);

  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={image.url} alt="Cat" width={200} />
      ))}
    </div>
  );
}

export default SelectedBreedImages;
