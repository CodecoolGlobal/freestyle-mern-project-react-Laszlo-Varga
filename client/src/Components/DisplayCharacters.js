import { React } from "react";

function DisplayCharacters({ characters, handleCharacterClick, setMyAvengersClicked }) {
    return (
    <div className="allCardsContainer">
      {characters.map((character) => (
        character.thumbnail.path.slice(-9) !== "available" ? 
        (<div
          className="cardContainer"
          key={character.id}
        >
          {/* <h3>{character.name}</h3> */}
          <img
            className="mainImage"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
          <div className='middle'>
          <div className='namebox'>{character.name}</div>
          </div>
          {/* <div className='buttonContainer'>
        <button onClick={() => handleCharacterClick(character)}>Add to Favorites</button>
        <button onClick={() => setMyAvengersClicked(true)}>Show my Avengers</button>
        </div> */}
        </div>) :(
              <div key={character.id}></div>
        )
      ))}
    </div>
  );
}

export default DisplayCharacters;
