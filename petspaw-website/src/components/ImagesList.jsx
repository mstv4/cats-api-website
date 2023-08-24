import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { imagesFetch } from "../features/imagesSlice";

const ImagesList = () => {
  const { searchQuery } = useSelector((state) => state.search);

  const items = useSelector((state) => state.items.items);
  const status = useSelector((state) => state.items.status);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchQuery === "") return;

    dispatch(imagesFetch(searchQuery));
  }, [searchQuery, dispatch]);

  return (
    <div className="images-container">
      {status === "pending" && <span className="loader">loader</span>}
      {status === "rejected" && <span className="error-data">Error loading data.</span>}
      {status === "success" && (
        <>
          <div>
            {items.map((image, index) => (
              <div key={index} className="images-list__item">
                <img src={image.url} alt={image.tags} width={300} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImagesList;
