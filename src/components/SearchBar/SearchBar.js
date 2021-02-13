import React, { useState, useContext } from "react";
import { withRouter } from 'react-router-dom';
import { ImagesContext } from "../../ImagesContext";
import "./SearchBar.css";

const SearchBar = ({history}) => {
  const { setSearchPhrase } = useContext(ImagesContext);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchPhrase(inputValue);
    setInputValue("")
    history.push('/search-results');
  };

  return (
    <form onSubmit={handleFormSubmit} className="main-form">
      <div className="formWrapper">
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

export default withRouter(SearchBar);
