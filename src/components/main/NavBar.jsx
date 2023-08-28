import { Link } from "react-router-dom";

import MainLogo from "../../media/svg/MainLogo";
import VoteTable from "../../media/img/vote-table.png";
import PetBreeds from "../../media/img/pet-breeds.png";
import ImageSearch from "../../media/img/image-search.png";

const NavBar = () => {
  return (
    <div className="home-left-block">
      <Link to="/">
        <div className="home-main-logo">
          <MainLogo />
        </div>
      </Link>
      <h1>Hi!👋</h1>
      <h3>Welcome to MacPaw Bootcamp 2023</h3>
      <h2>Lets start using The Cat API</h2>
      <div className="home-images">
        <Link to="/voting">
          <div className="home-vote-table">
            <img src={VoteTable} alt="logo vote table" />
          </div>
        </Link>
        <Link to="/breeds">
          <div className="home-pet-breeds">
            <img src={PetBreeds} alt="logo pet breeds" />
          </div>
        </Link>
        <Link to="/gallery">
          <div className="home-image-search">
            <img src={ImageSearch} alt="logo search" />
          </div>
        </Link>
      </div>
      <div className="home-buttons">
        <Link to="/voting">
          <button>Voting</button>
        </Link>
        <Link to="/breeds">
          <button>Breeds</button>
        </Link>
        <Link to="/gallery">
          <button>Gallery</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
