import React from 'react';

const SearchBar = ({ searchTerm, onSearch, onSearchButtonClick }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search games"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button onClick={onSearchButtonClick}>Search</button>
    </div>
  );
};

export default SearchBar;
