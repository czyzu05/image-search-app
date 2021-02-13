import React, {useContext} from 'react'
import {ImagesContext} from '../../ImagesContext'
import ImageCard from '../ImageCard/ImageCard'
import './ImagesList.css'

const ImagesList = () => {
    const {images} = useContext(ImagesContext)

    const imgList = images.map(img => (
        <ImageCard img={img} key={img.id}/>
    ))
    return (
        <div className="imgsContainer">
            {imgList}
        </div>
    )
}

export default ImagesList
