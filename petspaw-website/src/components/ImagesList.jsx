import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { imagesListFetch } from "../features/api";

const ImagesList = () => {
  const images = useSelector((state) => state.images.items);
  const status = useSelector((state) => state.images.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(imagesListFetch());
  }, [dispatch]);

  return (
    <div className="images-container">
      {status === "pending" && <span className="loader">loader</span>}
      {status === "rejected" && <span className="error-data">Error loading data.</span>}
      {status === "success" && (
        <>
          {images.map((image, index) => (
            <div key={index} className="images-list__item">
              <img src={image.url} alt={image.tags} width={300} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ImagesList;

// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchImagesList } from "../features/imagesListSlice";

// function ImagesList() {
//   const { searchQuery } = useSelector((state) => state.search);

//   const images = useSelector((state) => state.images);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(
//       fetchImagesList({
//         searchQuery,
//       })
//     );
//   }, [searchQuery, dispatch]);

//   return (
//     <div className="images-container">
//       <>
//       {images.items?.map((image, index) => (
//             <div key={index} className="images-list__item">
//               <img src={image.url} alt={image.tags} width={300} />
//             </div>
//           ))}
//       </>
//     </div>
//   );
// }

// export default ImagesList;
