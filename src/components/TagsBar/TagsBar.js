import React, { useContext } from "react";
import { ImagesContext } from "../../ImagesContext";
import TagItem from "../TagItem/TagItem";
import "./TagsBar.css";

const TagsBar = () => {
  const { images } = useContext(ImagesContext);

  let allTags = [];

  images.map((image) => {
    return allTags.push(...image.tags.map((tag) => tag.title));
  });

  const tagsWithoutDuplicates = [...new Set(allTags)];

  return (
    <div className="tagsContainer">
      {tagsWithoutDuplicates.map((tag) => (
        <TagItem tag={tag} key={tag} />
      ))}
    </div>
  );
};

export default TagsBar;
