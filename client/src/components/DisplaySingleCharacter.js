import React, { useState } from "react";

const DisplaySingleCharacter = ({ character, handleCharacterClick }) => {
const [story, setStory] = useState([]);

console.log('displaySingle', character);
const url = character.urls[0].url;
console.log('url', url);

  async function getStory(url) {
    const storyRes = await fetch(url);
    const storyArray = await storyRes.json();
   setStory(storyArray);
  }
  getStory();

  return (
    <div>
      <h3>{character.name}</h3>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <h4>{character.description}</h4>
      <h4>{story}</h4>
      <button onClick={() => handleCharacterClick(character)}>Add to Favorites</button>
    </div>
  );
};

export default DisplaySingleCharacter;
