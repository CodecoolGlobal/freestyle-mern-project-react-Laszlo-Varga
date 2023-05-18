import React from "react";
import "../styles/app.css"

const SearchBar = ({ placeholder, onInputChange, searchInput }) => {
  return (
    <div id='inputDiv'>
    <input
      id='input'
      type="search"
      placeholder={placeholder}
      onChange={onInputChange}
      value={searchInput}
    />
    </div>
  );
};

export default SearchBar;
