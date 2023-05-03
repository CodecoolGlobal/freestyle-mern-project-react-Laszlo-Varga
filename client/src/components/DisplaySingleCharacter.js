import React, { useState } from "react";

const DisplaySingleCharacter = ({ singleCharacter }) => {
const [story, setStory] = useState([]);
console.log('displaySingle', singleCharacter);
const url = singleCharacter.urls[0].url;
console.log('url', url);

  async function getStory(url) {
    const storyRes = await fetch(url);
    const storyArray = await storyRes.json();
   setStory(storyArray);
  }
  getStory();

  return (
    <div>
      <h3>{singleCharacter.name}</h3>
      <img
        src={`${singleCharacter.thumbnail.path}.${singleCharacter.thumbnail.extension}`}
        alt={singleCharacter.name}
      />
      <h4>{singleCharacter.description}</h4>
      <h4>{story}</h4>
    </div>
  );
};

export default DisplaySingleCharacter;
