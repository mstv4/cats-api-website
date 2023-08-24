import { useEffect } from "react";
import { UseSelector, useSelector } from "react-redux";

const ImagesList = () => {
  const { searchQuery } = useSelector((state) => state.search);

  return (
    <div className="images-list">
      <h2>{searchQuery}</h2>
    </div>
  );
};

export default ImagesList;
