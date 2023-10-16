import "./Search.css";
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className="search-whole-container">
      <div className="search-data">
        <div className="search-location">
          Anywhere
        </div>
        <div className="search-duration">
          Any Week
        </div>
        <div className="search-add-guests">
          <div className="guest-label">
            Add Guests
          </div>
          <div className="search-icon">
            <BiSearch size={18} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Search;
