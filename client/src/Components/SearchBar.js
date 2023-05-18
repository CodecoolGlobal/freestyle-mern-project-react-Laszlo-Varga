import React from "react";
import '../App.css'

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
