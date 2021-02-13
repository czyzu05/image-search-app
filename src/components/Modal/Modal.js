import React from 'react'
import './Modal.css'

const Modal = ({img}) => {
    return (
        <div className="modalWrapper">
            <img src={img.urls.small} />
        </div>
    )
}

export default Modal
