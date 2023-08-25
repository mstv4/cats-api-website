import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../features/searchSlice";
import { imagesListFetch } from "../features/api";

import SearchLogo from "../media/svg/SearchLogo";
import LikeLogo from "../media/svg/LikeLogo";
import FavLogo from "../media/svg/FavLogo";
import DislikeLogo from "../media/svg/DislikeLogo";

const SearchFavBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="search-fav-bar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for breeds by name"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          onClick={() => {
            dispatch(setSearchQuery(search));
            dispatch(imagesListFetch());
          }}
        >
          <div className="search-logo-button">
            <SearchLogo />
          </div>
        </button>
      </div>
      <div className="fav-buttons-container">
        <button>
          <div className="fav-button">
            <LikeLogo />
          </div>
        </button>
        <button>
          <div className="fav-button">
            <FavLogo />
          </div>
        </button>
        <button>
          <div className="fav-button">
            <DislikeLogo />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SearchFavBar;
