import React from "react";

const DisplaySingleCharacter = ({
  character,
  handleCharacterClick,
  handleCloseCharacter,
}) => {
  console.log(character);

  const displayItems = (items) => {
    return items.map((item, index) => <li key={index}>{item.name}</li>);
  };

  return (
    <div>
      <h3>{character.name}</h3>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <h4>{character.description}</h4>

      <h5>Comics:</h5>
      <ul>{displayItems(character.comics.items)}</ul>

      <h5>Series:</h5>
      <ul>{displayItems(character.series.items)}</ul>

      <h5>Stories:</h5>
      <ul>{displayItems(character.stories.items)}</ul>

      <button onClick={() => handleCharacterClick()}>Save</button>
      <button onClick={handleCloseCharacter}>Close</button>
    </div>
  );
};

export default DisplaySingleCharacter;
