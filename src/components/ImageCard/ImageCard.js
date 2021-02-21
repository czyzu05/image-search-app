import React, {useState, useContext} from "react";
import {ImagesContext} from '../../ImagesContext'
import TagItem from "../TagItem/TagItem";
import "./ImageCard.css";

const ImageCard = ({ img }) => {

  const {showModal, setShowModal, setActiveImg} = useContext(ImagesContext)

  const handleModal = (image) => {
    setShowModal(!showModal)
    setActiveImg(image)
  }

  return (
    <>
    <div className="imgCardContainer">
      <img src={img.urls.small} alt={img.description} className="img" onClick={() => handleModal(img)}/>
      <div className="tags">
        {img.tags.map((tag) => (
          <TagItem tag={tag.title} key={tag.title}/>
        ))}
      </div>
    </div>
    </>
  );
};

export default ImageCard;
