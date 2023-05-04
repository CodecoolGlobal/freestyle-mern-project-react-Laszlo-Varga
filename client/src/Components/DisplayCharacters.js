import { React } from "react";

function DisplayCharacters({
  characters,
  handleCharacterClick,
  handleCharacterInfoClick,
}) {
  return (
    <div className="allCardsContainer">
      {characters.map((character) =>
        character.thumbnail.path.slice(-9) !== "available" ? (
          <div className="cardContainer" key={character.id}>
            <img
              className="mainImage"
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            onClick={() => handleCharacterInfoClick(character)}
           />
            <div className="middle">
              <div className="namebox">{character.name}</div>
            </div>
            <div className="buttonContainer">
          
            
             
            </div>
          </div>
        ) : (
          <div key={character.id}></div>
        )
      )}
    </div>
  );
}

export default DisplayCharacters;
