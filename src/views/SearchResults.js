import React, { useContext } from "react";
import { ImagesContext } from "../ImagesContext";
import SearchBar from "../components/SearchBar/SearchBar";
import ImagesList from "../components/ImagesList/ImagesList";
import ModalComponent from "../components/Modal/Modal";
import TagsBar from "../components/TagsBar/TagsBar";

const SearchResults = () => {
  const { searchPhrase, activeImg, showModal } = useContext(ImagesContext);

  return (
    <div className="wrapper">
      <SearchBar />
      <h1
        style={{
          alignSelf: "flex-start",
          padding: "30px 0 15px 100px",
          fontSize: "40px",
        }}
      >
        {searchPhrase}
      </h1>
      <TagsBar />
      <ImagesList />
      {showModal ? <ModalComponent activeImg={activeImg} /> : null}
    </div>
  );
};

export default SearchResults;
