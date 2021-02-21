import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const ImagesContext = createContext();

export const ImagesProvider = ({ children }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeImg, setActiveImg] = useState(null);

  useEffect(() => {
    const rootAPI = "https://api.unsplash.com";
    const apiKey = process.env.REACT_APP_API_KEY;

    axios
      .get(`${rootAPI}/search/photos?client_id=${apiKey}`, {
        params: {
          query: { searchPhrase },
          orientation: "landscape",
          per_page: 12,
        },
      })
      .then((res) => setImages(res.data.results));
  }, [searchPhrase]);

  return (
    <ImagesContext.Provider
      value={{
        images,
        setSearchPhrase,
        searchPhrase,
        showModal,
        setShowModal,
        activeImg,
        setActiveImg,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
};
