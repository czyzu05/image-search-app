import React, {useContext} from 'react'
import {ImagesContext} from '../ImagesContext'
import SearchBar from '../components/SearchBar/SearchBar'
import TagsBar from '../components/TagsBar/TagsBar'

const SearchResults = () => {
    const {searchPhrase} = useContext(ImagesContext)

    return (
        <div className="wrapper">
            <SearchBar />
            <h1 style={{alignSelf: "flex-start", padding: "30px 0 15px 100px", fontSize: "40px"}}>{searchPhrase}</h1>
            <TagsBar />
        </div>
    )
}

export default SearchResults
