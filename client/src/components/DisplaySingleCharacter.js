import React from "react";
import '../App.css'

const DisplaySingleCharacter = ({character, handleCharacterClick, handleCloseCharacter,
}) => {
  console.log(character);

  const displayItems = (items) => {
    console.log(items)
    return items.map((item, index) => <li key={index}>{item.name}</li>);
  };

  return (
    <div className="singleCharContainer">
      <h3 className="singleName">{character.name}</h3>
      <div id="picAndDesc">
        <img
          className="mainImage"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
        <h4 className="singleName">{character.description}</h4>

      </div>

      <h5 className="singleName">Comics:</h5>
      <ul>{displayItems(character.comics.items)}</ul>

      <h5 className="singleName">Series:</h5>
      <ul>{displayItems(character.series.items)}</ul>

      <h5 className="singleName">Stories:</h5>
      <ul>{displayItems(character.stories.items)}</ul>

      <div className="buttonContainer">
          
            
      <button onClick={() => handleCharacterClick(character)}>Save</button>
      <button onClick={handleCloseCharacter}>Back</button>
             
            </div>
    
    </div>
  );
};

export default DisplaySingleCharacter;
