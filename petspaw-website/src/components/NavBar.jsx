import MainLogo from "../media/svg/MainLogo.svg";
import VoteTable from "../media/img/vote-table.png";
import PetBreeds from "../media/img/pet-breeds.png";
import ImageSearch from "../media/img/image-search.png";

const NavBar = () => {
  return (
    <div className="home-left-block">
      <img src={MainLogo} className="home-main-logo" alt="logo main" />
      <h1>Hi!👋</h1>
      <h3>Welcome to MacPaw Bootcamp 2023</h3>
      <h2>Lets start using The Cat API</h2>
      <div className="home-images">
        <div className="home-vote-table">
          <img src={VoteTable} alt="logo vote table" width={100} />
        </div>
        <div className="home-pet-breeds">
          <img src={PetBreeds} alt="logo pet breeds" width={117} />
        </div>
        <div className="home-image-search">
          <img src={ImageSearch} alt="logo image search" width={112} />
        </div>
      </div>
      <div className="home-buttons">
        <button>Voting</button>
        <button>Breeds</button>
        <button>Gallery</button>
      </div>
    </div>
  );
};

export default NavBar;
