import React, { useContext } from "react";
import { ImagesContext } from "../../ImagesContext";
import "./TagsBar.css";

const TagsBar = () => {
  const { images } = useContext(ImagesContext);

  let allTags = [];

  images.map((image) => {
    return allTags.push(...image.tags.map((tag) => tag.title))
  });

  const tagsWithoutDuplicates = [...new Set(allTags)];

  console.log(tagsWithoutDuplicates);
  return (
    <div className="tagsContainer">
      <ul>
        tagsWithoutDuplicates
      </ul>
    </div>
  );
};

export default TagsBar;
