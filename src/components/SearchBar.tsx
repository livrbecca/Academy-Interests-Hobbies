import { searchBarProps } from "../utils/interfaces";

const SearchBar: React.FC<searchBarProps> = ({
  displayedPeople,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div>
      <input
      className="searchInput"
        type="text"
        value={searchTerm}
        placeholder="search by name or notes"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
