import React from 'react'
import './TagItem.css'

const TagItem = ({tag}) => {
    return (
        <div className="tagContainer">
            {tag}
        </div>
    )
}

export default TagItem
