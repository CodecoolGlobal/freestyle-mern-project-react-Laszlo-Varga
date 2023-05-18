import React from "react";
import "../styles/app.css"

const SearchBar = ({ placeholder, handleChange, searchInput }) => {
  return (
    <div id='inputDiv'>
    <input
      id='input'
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
      value={searchInput}
    />
    </div>
  );
};

export default SearchBar;
