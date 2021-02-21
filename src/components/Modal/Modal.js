import React, { useContext } from "react";
import { ImagesContext } from "../../ImagesContext";
import "./Modal.css";

const ModalComponent = ({ activeImg }) => {
  const { setShowModal } = useContext(ImagesContext);

  return (
    <>
      <div className="modal-backdrop" onClick={() => setShowModal(false)} />
      <div className="modalWrapper">
        <div className="modalHeading">
          <div className="modalHeadingAuthorInfo">
            <div className="authorIcon">
              <img
                src={activeImg.user.profile_image.medium}
                alt={activeImg.user.username}
              />
            </div>
            <div className="authorName">
              <p>{activeImg.user.username}</p>
            </div>
          </div>
          <div className="modalHeadingBtn">
            <i class="fas fa-times" onClick={() => setShowModal(false)}></i>
          </div>
        </div>
        <div className="modalImg">
          <img src={activeImg.urls.regular} alt={activeImg.alt_description} />
        </div>
      </div>
    </>
  );
};

export default ModalComponent;
