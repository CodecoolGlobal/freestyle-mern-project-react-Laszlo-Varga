import React from "react";
import '../App.css'

const SearchBar = ({ placeholder, handleChange, searchInput }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
      value={searchInput}
    />
  );
};

export default SearchBar;
