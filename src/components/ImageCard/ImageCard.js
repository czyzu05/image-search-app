import React, {useState, useContext} from "react";
import {ImagesContext} from '../../ImagesContext'
import TagItem from "../TagItem/TagItem";
import Modal from '../Modal/Modal'
import "./ImageCard.css";

const ImageCard = ({ img }) => {

  const {showModal, setShowModal} = useContext(ImagesContext)

  const toggleShowModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className="imgCardContainer">
      {showModal ? <Modal img={img}/> : null }
      <img src={img.urls.small} alt={img.description}  className="img" onClick={toggleShowModal}/>
      <div className="tags">
        {img.tags.map((tag) => (
          <TagItem tag={tag.title} key={tag.title}/>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
