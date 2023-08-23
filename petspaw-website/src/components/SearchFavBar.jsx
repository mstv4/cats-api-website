import SearchLogo from "../media/svg/SearchLogo";
import LikeLogo from "../media/svg/LikeLogo";
import FavLogo from "../media/svg/FavLogo";
import DislikeLogo from "../media/svg/DislikeLogo";

import "../styles/App.css";

const SearchFavBar = () => {
  return (
    <div className="search-fav-bar">
      <div className="search-container">
        <input type="text" placeholder="Search for breeds by name" />
        <button>
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
