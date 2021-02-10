import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const ImagesContext = createContext();

export const ImagesProvider = ({ children }) => {
  const [searchPhrase, setSearchPhrase] = useState("")
  const [images, setImages] = useState([]);

  useEffect(() => {
    const rootAPI = "https://api.unsplash.com";
    const apiKey = process.env.REACT_APP_API_KEY;

    axios
      .get(`${rootAPI}/search/photos?client_id=${apiKey}`, {
        params: {
          query: {searchPhrase},
        },
      })
      .then((res) => setImages(res.data.results));
  }, [searchPhrase]);

  return (
    <ImagesContext.Provider value={{images, setSearchPhrase, searchPhrase}}>{children}</ImagesContext.Provider>
  );
};
