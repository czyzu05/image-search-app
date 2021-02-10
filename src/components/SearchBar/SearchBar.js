import React, { useState, useContext } from "react";
import { ImagesContext } from "../../ImagesContext";
import "./SearchBar.css";

const SearchBar = () => {
  const { setSearchPhrase } = useContext(ImagesContext);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchPhrase(inputValue);
    setInputValue("")
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="main">
        <i className="fa fa-search"></i>
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          placeholder="Search term..."
        />
      </div>
    </form>
  );
};

export default SearchBar;
